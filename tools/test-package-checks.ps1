$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

Add-Type -AssemblyName System.IO.Compression.FileSystem
$stableRange = '[0.1.0, 0.2.0-0.0)'
$cases = @(
    @{ Range = $stableRange; Extra = ''; Error = $null }
    @{ Range = $stableRange; Extra = '<dependency id="RvtIO.Scene" version="0.4.0" />'; Error = "unexpected dependency 'RvtIO.Scene'" }
    @{ Range = '[0.1.1-preview.1, 0.2.0-0.0)'; Extra = ''; Error = 'lower bound is missing or a preview' }
    @{ Range = '[0.1.0, 0.2.0-0)'; Extra = ''; Error = "whose bound '0.2.0-0' nuget.org refuses" }
)

$fixtures = [IO.Directory]::CreateTempSubdirectory('ioviewer-package-checks-').FullName
$package = Join-Path $fixtures 'IOViewer.1.0.0.nupkg'
try {
    foreach ($case in $cases) {
        $archive = [IO.Compression.ZipFile]::Open($package, [IO.Compression.ZipArchiveMode]::Create)
        try {
            $writer = [IO.StreamWriter]::new($archive.CreateEntry('IOViewer.nuspec').Open())
            try {
                $writer.Write(@"
<package xmlns="http://schemas.microsoft.com/packaging/2013/05/nuspec.xsd">
  <metadata>
    <id>IOViewer</id>
    <version>1.0.0</version>
    <dependencies>
      <group targetFramework="net10.0"><dependency id="IOScene" version="$($case.Range)" /></group>
      <group targetFramework="net8.0"><dependency id="IOScene" version="$stableRange" />$($case.Extra)</group>
    </dependencies>
  </metadata>
</package>
"@)
            } finally { $writer.Dispose() }
        } finally { $archive.Dispose() }

        $message = $null
        try { & (Join-Path $PSScriptRoot 'check-packages.ps1') -PackageDirectory $fixtures }
        catch { $message = $_.Exception.Message }
        if ($case.Error) {
            if ($message -notlike "*$($case.Error)*") { throw "Expected '$($case.Error)', got '$message'" }
        } elseif ($message) {
            throw "The valid package failed: $message"
        }

        [IO.File]::Delete($package)
    }
}
finally {
    [IO.File]::Delete($package)
    [IO.Directory]::Delete($fixtures)
}
Write-Host "Passed $($cases.Count) package check cases."
