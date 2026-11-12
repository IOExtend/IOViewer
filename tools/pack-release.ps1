<#
.SYNOPSIS
    Packs release assets into artifacts: binary archives of library and CLI, source zip, NuGet packages and SHA256SUMS.txt.
#>
param(
    [string]$Output = (Join-Path $PSScriptRoot '..\artifacts')
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$props = [xml](Get-Content -LiteralPath (Join-Path $root 'Directory.Build.props') -Raw)
$versionNode = $props.SelectSingleNode('/Project/PropertyGroup/Version')
if (-not $versionNode) {
    $versionNode = $props.SelectSingleNode('/Project/PropertyGroup/VersionPrefix')
}
$version = if ($versionNode) { $versionNode.InnerText } else { $null }
if (-not $version) { throw "Version or VersionPrefix property not found in Directory.Build.props" }

New-Item -ItemType Directory -Force -Path $Output | Out-Null
$Output = (Resolve-Path $Output).Path
$stage = Join-Path $Output 'stage'
if (Test-Path -LiteralPath $stage) { Remove-Item -LiteralPath $stage -Recurse -Force }
New-Item -ItemType Directory -Force -Path $stage | Out-Null

function Invoke-DotNet {
    & dotnet @args
    if ($LASTEXITCODE -ne 0) { throw "dotnet $($args -join ' ') failed with exit code $LASTEXITCODE" }
}

function New-Zip([string]$SourceDir, [string]$ZipPath) {
    if (Test-Path -LiteralPath $ZipPath) { Remove-Item -LiteralPath $ZipPath }
    Compress-Archive -Path (Join-Path $SourceDir '*') -DestinationPath $ZipPath
}

# 1. IOViewer Library assemblies (net8.0 and net10.0)
Write-Host "Publishing IOViewer library..."
$libStage = Join-Path $stage 'lib'
$libNet8 = Join-Path $libStage 'net8.0'
$libNet10 = Join-Path $libStage 'net10.0'
Invoke-DotNet publish (Join-Path $root 'src\IOViewer\IOViewer.csproj') -c Release -f net8.0 -o $libNet8
Invoke-DotNet publish (Join-Path $root 'src\IOViewer\IOViewer.csproj') -c Release -f net10.0 -o $libNet10
Copy-Item (Join-Path $root 'README.md') $libStage
Copy-Item (Join-Path $root 'LICENSE') $libStage
Copy-Item (Join-Path $root 'THIRD-PARTY-NOTICES.md') $libStage
New-Zip $libStage (Join-Path $Output "IOViewer-$version.zip")

# 2. CLI (.NET 8 Runtime)
Write-Host "Publishing IOViewer.Cli (net8.0)..."
$cliNet8 = Join-Path $stage 'cli-net8.0'
Invoke-DotNet publish (Join-Path $root 'src\IOViewer.Cli\IOViewer.Cli.csproj') -c Release -f net8.0 -o $cliNet8
Copy-Item (Join-Path $root 'README.md') $cliNet8
Copy-Item (Join-Path $root 'LICENSE') $cliNet8
Copy-Item (Join-Path $root 'THIRD-PARTY-NOTICES.md') $cliNet8
New-Zip $cliNet8 (Join-Path $Output "IOViewer-Cli-$version.zip")

# 3. CLI (.NET 10 Runtime)
Write-Host "Publishing IOViewer.Cli (net10.0)..."
$cliNet10 = Join-Path $stage 'cli-net10.0'
Invoke-DotNet publish (Join-Path $root 'src\IOViewer.Cli\IOViewer.Cli.csproj') -c Release -f net10.0 -o $cliNet10
Copy-Item (Join-Path $root 'README.md') $cliNet10
Copy-Item (Join-Path $root 'LICENSE') $cliNet10
Copy-Item (Join-Path $root 'THIRD-PARTY-NOTICES.md') $cliNet10
New-Zip $cliNet10 (Join-Path $Output "IOViewer-Cli-$version-net10.0.zip")

# 4. Source ZIP
Write-Host "Archiving repository source tree..."
$sourceZip = Join-Path $Output "IOViewer-$version-source.zip"
if (Test-Path -LiteralPath $sourceZip) { Remove-Item -LiteralPath $sourceZip }
& git -C $root archive --format=zip --prefix="IOViewer-$version/" --output=$sourceZip HEAD
if ($LASTEXITCODE -ne 0) { throw "git archive failed with exit code $LASTEXITCODE" }

# 5. Pack NuGet Packages
Write-Host "Packing NuGet packages..."
Invoke-DotNet pack (Join-Path $root 'IOViewer.slnx') -c Release --no-build -o $Output

# 6. Checksums
Write-Host "Calculating SHA-256 sums..."
$sumsFile = Join-Path $Output 'SHA256SUMS.txt'
if (Test-Path -LiteralPath $sumsFile) { Remove-Item -LiteralPath $sumsFile }
$hashLines = @()
Get-ChildItem -Path $Output -File | Where-Object { $_.Name -ne 'SHA256SUMS.txt' } | ForEach-Object {
    $hash = (Get-FileHash -LiteralPath $_.FullName -Algorithm SHA256).Hash.ToLowerInvariant()
    $hashLines += "$hash  $($_.Name)"
}
$hashLines | Set-Content -LiteralPath $sumsFile -Encoding ascii

Remove-Item -LiteralPath $stage -Recurse -Force
Write-Host "Pack completed successfully. Assets created in '$Output'."
