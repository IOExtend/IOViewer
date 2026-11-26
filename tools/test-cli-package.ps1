param(
    [Parameter(Mandatory)]
    [string]$PackageDirectory,
    [Parameter(Mandatory)]
    [string]$Rid
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$feed = (Resolve-Path -LiteralPath $PackageDirectory).Path
$pointers = @(Get-ChildItem -LiteralPath $feed -File -Filter 'IOViewer.Cli.*.nupkg' |
    Where-Object Name -match '^IOViewer\.Cli\.\d')
if ($pointers.Count -ne 1 -or $pointers[0].Length -gt 100KB) {
    throw 'Expected one IOViewer.Cli pointer package under 100 KiB.'
}
$version = $pointers[0].Name -replace '^IOViewer\.Cli\.|\.nupkg$', ''
$package = Get-Item -LiteralPath (Join-Path $feed "IOViewer.Cli.$Rid.$version.nupkg")
if ($Rid -ne 'any' -and $package.Length -gt 15MB) {
    throw "$($package.Name) is $($package.Length) bytes and exceeds the 15 MiB size limit."
}

function Invoke-Checked([string]$Executable, [string[]]$Arguments) {
    & $Executable @Arguments
    if ($LASTEXITCODE -ne 0) { throw "$Executable $($Arguments -join ' ') failed with exit code $LASTEXITCODE." }
}

$temp = [IO.Directory]::CreateTempSubdirectory('iov-').FullName
try {
    $config = Join-Path $temp 'NuGet.Config'
    $source = [Security.SecurityElement]::Escape($feed)
    '<configuration><packageSources><clear/><add key="test" value="' + $source + '"/></packageSources></configuration>' |
        Set-Content -LiteralPath $config -Encoding utf8
    $toolPath = Join-Path $temp 'tool'
    Invoke-Checked dotnet @('tool', 'install', 'IOViewer.Cli', '--version', $version, '--tool-path', $toolPath,
        '--configfile', $config, '--no-cache')
    $installed = @(Get-ChildItem -LiteralPath (Join-Path $toolPath '.store') -File -Recurse -Filter '*.nupkg')
    if ($package.Name -notin $installed.Name) { throw "The installer did not select $($package.Name)." }
    Write-Host "Installed $($package.Name) ($($package.Length) bytes)."

    $fixture = Join-Path $temp 'scan.lgs'
    $generator = Join-Path $PSScriptRoot '../tests/fixtures/cli/generate-lgs.cs'
    Invoke-Checked dotnet @('run', $generator, '-c', 'Release', '--', $fixture)

    $cli = Join-Path $toolPath $(if ($IsWindows) { 'ioviewer.exe' } else { 'ioviewer' })
    $html = Join-Path $temp 'scan.html'
    $json = Join-Path $temp 'scan.json'
    Invoke-Checked $cli @($fixture, '-o', $html, '--json', $json)
    $document = Get-Content -LiteralPath $json -Raw | ConvertFrom-Json -AsHashtable
    $points = @($document.Scene.Geometries | Where-Object Topology -eq 2)
    if ($points.Count -ne 1 -or $points[0].Vertices.Count -ne 12) { throw 'Expected four LGS points.' }
    $id = [string]$points[0].Id
    $rgb = [Convert]::FromBase64String($document.PointColors[$id])
    $intensity = [Convert]::FromBase64String($document.PointIntensities[$id])
    if (($rgb -join ',') -ne '10,70,55,30,70,55,20,70,55,40,70,55' -or $intensity.Length -ne 4) {
        throw 'Expected the four LGS colors and intensity samples.'
    }
    $photos = @($document.Panoramas)
    if ($photos.Count -ne 1 -or $photos[0].Name -ne 'Synthetic station') {
        throw 'Expected the panorama and station name from the LGS project database.'
    }
    $jpeg = [Convert]::FromBase64String($photos[0].Jpeg)
    if ($jpeg.Length -lt 4 -or $jpeg[0] -ne 0xff -or $jpeg[1] -ne 0xd8 -or
        $jpeg[-2] -ne 0xff -or $jpeg[-1] -ne 0xd9) {
        throw 'Expected a JPEG panorama encoded by the installed tool.'
    }
    if (-not (Test-Path -LiteralPath $html -PathType Leaf)) { throw 'Expected the standalone HTML export.' }
    Write-Host 'Exported four colored points, measured intensity and a JPEG panorama.'
}
finally {
    Remove-Item -LiteralPath $temp -Recurse -Force
}
