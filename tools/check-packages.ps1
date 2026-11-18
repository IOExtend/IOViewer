param(
    [Parameter(Mandatory)]
    [string]$PackageDirectory
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

Write-Host 'Checking package dependencies...'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$checkedViewer = $false
foreach ($package in Get-ChildItem -LiteralPath $PackageDirectory -File -Filter '*.nupkg') {
    $zip = [IO.Compression.ZipFile]::OpenRead($package.FullName)
    try {
        $entry = $zip.Entries | Where-Object { $_.FullName -notlike '*/*' -and $_.Name -like '*.nuspec' } | Select-Object -First 1
        if (-not $entry) { throw "$($package.Name) has no package manifest" }
        $reader = [IO.StreamReader]::new($entry.Open())
        try { $nuspec = [xml]$reader.ReadToEnd() } finally { $reader.Dispose() }
    }
    finally { $zip.Dispose() }

    $id = $nuspec.SelectSingleNode("/*[local-name()='package']/*[local-name()='metadata']/*[local-name()='id']")
    if (-not $id -or [string]::IsNullOrWhiteSpace($id.InnerText)) { throw "$($package.Name) has no package ID" }
    $dependencies = @($id.ParentNode.SelectNodes("./*[local-name()='dependencies']//*[local-name()='dependency']"))
    $isViewer = $id.InnerText -eq 'IOViewer'
    if ($isViewer) {
        $checkedViewer = $true
        if ($dependencies.Count -eq 0) { throw "$($package.Name) has no dependency on IOScene" }
    }

    foreach ($dependency in $dependencies) {
        $dependencyId = $dependency.GetAttribute('id')
        $range = $dependency.GetAttribute('version')
        if ($isViewer) {
            if ($dependencyId -ne 'IOScene') {
                throw "$($package.Name) has an unexpected dependency '$dependencyId'; only IOScene is allowed in the library"
            }
            # The range disables NU5104. Keep preview IOScene contracts out of published packages.
            $lower = $range.TrimStart('[', '(').Split(',')[0].Trim()
            if ($lower -eq '' -or $lower.Contains('-')) {
                throw "$($package.Name) depends on IOScene '$range', whose lower bound is missing or a preview; release on a published IOScene"
            }
        }

        # NuGetGallery ManifestValidator.ValidateDependencyVersion rejects metadata and single-part prerelease labels
        # that do not start with a letter. Pack accepts both.
        foreach ($bound in $range.Trim('[', ']', '(', ')').Split(',')) {
            $bound = $bound.Trim()
            $label = if ($bound.Contains('-')) { $bound.Substring($bound.IndexOf('-') + 1) } else { '' }
            if ($bound.Contains('+') -or ($label -ne '' -and -not $label.Contains('.') -and $label -notmatch '^[a-z][0-9a-z-]*$')) {
                throw "$($package.Name) depends on $dependencyId '$range', whose bound '$bound' nuget.org refuses"
            }
        }
    }
}
if (-not $checkedViewer) { throw "No IOViewer package found in '$PackageDirectory'; its IOScene dependency was not checked" }
