# Contributing to IOViewer

## Reporting bugs

Open a [GitHub issue](https://github.com/IOExtend/IOViewer/issues) with:

- The IOViewer version (`ioviewer --version` or the package version).
- The command line or API call used, with confidential values and personal paths removed.
- A minimal description of how to reproduce the problem.
- Expected and actual results, including relevant error messages.

Do not attach models if they contain confidential or customer data.
A minimal description is better than sharing a confidential model.

Report security issues through GitHub private vulnerability reporting in
the Security tab. Do not open public issues for security vulnerabilities.

## Proposing changes

Open an issue first for larger changes so the scope and approach can be
discussed before implementation. Keep changes focused on the agreed problem.

## Development setup

Install the .NET SDK specified by `global.json`. It currently specifies
10.0.100, allows roll-forward to the latest feature band, and excludes
prerelease SDKs. Tests run on .NET 8 and .NET 10, so both runtimes are needed.

From the repository root, run:

```sh
dotnet build IOViewer.slnx -c Release
dotnet test IOViewer.slnx -c Release
```

The library is in `src/IOViewer`, the CLI in `src/IOViewer.Cli`, engine adapters
in `src/IOViewer.<Engine>` (for example `src/IOViewer.IfcIO`), and tests in
`tests/IOViewer.Tests` and `tests/IOViewer.<Engine>.Tests`. Tests use small
synthetic models built in code. The repository ships no customer models; set
`IOVIEWER_IFC_FILE` to a private IFC file to run one more adapter test on it.

### Engine adapters

Engines (IfcIO, RvtIO and others) depend neither on IOViewer nor on each other;
an adapter from an engine's model to `ViewerDocument` lives in this repository,
depends on IOViewer and that one engine, and `src/IOViewer` takes no engine
dependency. Engine package versions are set in `EngineVersions.props`.

To build against an engine release that is not on nuget.org yet (IfcIO 0.11.0
at the time of writing, so restoring the solution fails without it), pack the
engine into a local folder and pass its version and the folder:

```sh
dotnet build IOViewer.slnx -c Release -p:IfcIOVersion=0.11.0-local.1 -p:RestoreAdditionalProjectSources=<local-feed>
dotnet test IOViewer.slnx -c Release --no-build
dotnet pack src/IOViewer.IfcIO/IOViewer.IfcIO.csproj -c Release -p:Version=0.2.0-local.1 -p:IfcIOVersion=0.11.0-local.1 -p:RestoreAdditionalProjectSources=<local-feed> -o <out>
```

Packing needs a prerelease `Version` as well, because NuGet refuses a stable
package that depends on a prerelease one. Do not commit a `nuget.config` that
points to a local feed.

### Viewer

The HTML viewer is a JavaScript project in `src/IOViewer/Viewer` (three.js,
bundled with esbuild). Its built script `dist/viewer.js` is committed and
embedded in the library, so .NET work does not need Node.js. To change the
viewer, install Node.js 24 and run from `src/IOViewer/Viewer`:

```sh
npm ci            # exact versions from package-lock.json
npm run build     # rebuilds dist/viewer.js
npm test          # unit tests (node --test)
npm run e2e       # builds, exports the fixtures with the CLI and runs Playwright (Chromium)
```

Commit `dist/viewer.js` together with the source change: CI rebuilds it and
fails when it differs from the committed file. The end-to-end tests need the
.NET SDK and a Chromium for Playwright (`npx playwright install chromium`).
Fixtures are in `tests/fixtures/viewer`.

`npm run perf` runs the manual performance harness in a visible Chromium
window (for example `PERF_LADDER=25000,200000` measures synthetic models made
by `tools/SyntheticModel`); its settings are described at the top of
`test/perf/orbit.perf.js`. It is not part of CI; include its numbers in the
pull request when a change can affect rendering speed. npm dependencies are
pinned to exact versions. When updating three.js (for example a Dependabot pull
request), also rebuild and commit `dist/viewer.js` and update the version in
`THIRD-PARTY-NOTICES.md`.

## Clean-room policy

- Write all code independently. Do not use decompiled or leaked source code,
  proprietary headers, vendor SDKs or code copied from other viewers.
- The only third-party JavaScript in the generated HTML is three.js (MIT),
  listed in `THIRD-PARTY-NOTICES.md`. Discuss any other runtime dependency
  first and add its license there. The page must stay self-contained and
  work offline: no CDN, web fonts or network requests.
- Do not add customer models, confidential data, vendor files or binaries to
  the repository. Keep private test files outside version control.
- Do not put personal data in code, documentation, test data or commit
  metadata. Use your GitHub noreply address as the commit email.

## Code conventions

- Follow the surrounding code and repository formatting settings.
- Keep nullable reference types enabled.
- Warnings are treated as errors.
- Write short English comments that explain why.
- Document new and changed public APIs with XML documentation comments.
- Do not write console output from the library. Only the CLI writes to the
  console, with diagnostics on standard error.
- Do not add runtime dependencies to the library without discussing it first.

## Pull requests

Include:

- A description of the problem and the change.
- Tests for behavior changes, including relevant errors and edge cases.
- The build and test commands run, their results, and any skipped checks.
- A note on how the generated HTML changes when the viewer template is affected.

Write commit messages in the imperative mood, for example,
"Fix section box clipping on rotated models".

## Releases

Push a tag matching the package version, such as `v0.2.0`, to run `release.yml`.
The workflow builds and tests the solution, attaches packages, symbols, source and checksums to a GitHub release,
and publishes the NuGet packages through Trusted Publishing. The release notes are the section of `CHANGELOG.md` for the version, so add that section before the tag.
The NuGet policy must name this repository, `release.yml`, the configured NuGet profile and the `IOViewer*` package pattern.

## Licensing contributions

Contributions are licensed under the MIT license. By submitting a
contribution, you confirm that you have the right to contribute it under
that license.

## Questions

Ask questions in GitHub Discussions or repository issues.
