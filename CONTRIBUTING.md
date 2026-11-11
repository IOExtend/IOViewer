# Contributing to IOViewer

## Reporting Bugs

Open a [GitHub issue](https://github.com/IOExtend/IOViewer/issues) with:
- The `IOViewer` / `ioviewer` version.
- The command line or C# API call used, with confidential or personal paths removed.
- A minimal description of how to reproduce the issue.
- Expected and actual results, including relevant error messages or stack traces.

Do not attach proprietary models if they contain confidential or customer data.

Report security vulnerabilities privately through the **Security** tab.

## Code Conventions & Clean-Room Policy

- **Clean-Room Development**: All code must be independently authored without decompiled proprietary source code, proprietary headers, or vendor SDKs.
- Do not commit proprietary project data or third-party binaries to the repository.
- Keep nullable reference types enabled (`<Nullable>enable</Nullable>`).
- Warnings are treated as errors (`<TreatWarningsAsErrors>true</TreatWarningsAsErrors>`).
- Zero native or third-party library dependencies for core HTML generation and exporting functionality.

## Releases & NuGet Publishing

Push a tag matching the package version, such as `v0.1.0`, to trigger the `release.yml` workflow.
The workflow builds and tests the solution, packs release packages and symbols, generates archives with checksums, publishes the GitHub Release, and publishes packages to NuGet.org via Trusted Publishing (GitHub Actions OIDC).
The NuGet policy on NuGet.org must name this repository (`IOExtend/IOViewer`), workflow `release.yml`, publisher `GitHubActions`, package pattern `IOViewer*`, and owner `mahach`.

## Licensing Contributions

All contributions are licensed under the [MIT License](LICENSE). By submitting a pull request, you confirm that you have the right to contribute your code under that license.
