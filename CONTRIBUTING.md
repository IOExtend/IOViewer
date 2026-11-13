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

The library is in `src/IOViewer`, the CLI in `src/IOViewer.Cli`, and tests in
`tests/IOViewer.Tests`. Tests use small synthetic models built in code.
The repository ships no customer models.

### Local feed for unpublished packages

The model data comes from the `IOScene` package. `Directory.Packages.props`
references it with a range such as `[0.1.0, 0.2.0-0.0)`: a patch of IOScene
adds or fixes and a minor is breaking, and the `-0.0` keeps out the previews of
the next minor (nuget.org refuses the shorter bound `-0` in a dependency). NuGet
restores the lowest version in the range that it finds.

To build against an IOScene version that is not on nuget.org yet, start the
range at that version (for a new minor, move the upper bound too, for example
`[0.2.0-preview.1, 0.3.0-0.0)`, and raise `IfcIO.Scene` and `RvtIO.Scene` to
versions built on that minor: IfcIO.Scene 0.11.1 and RvtIO.Scene 0.4.0 accept
only IOScene `[0.1.0, 0.2.0-0.0)`), pack IOScene into a local folder and pass
that folder:

```sh
dotnet build IOViewer.slnx -c Release -p:RestoreAdditionalProjectSources=<local-feed>
dotnet test IOViewer.slnx -c Release --no-build
```

Once a restore has put the package in the NuGet global packages folder, later
restores, `dotnet run` of the tools and `npm run e2e` find it there. Do not
commit a `nuget.config` that points to a local feed, and commit a lower bound
only when that version is on nuget.org: until then, restoring the solution
fails in the CI build job, the Docs workflow and `release.yml`, so do not tag
a release before then.

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
The workflow builds and tests the solution, publishes the NuGet packages through Trusted Publishing, and then attaches
packages, symbols, source and checksums to a GitHub release, marked as a prerelease when the version has a hyphen
(`v0.3.0-preview.1`). The release notes are the section of `CHANGELOG.md` for the version, so add that section before
the tag; the workflow stops before publishing when it is missing. `tools/pack-release.ps1` also stops it when the
`IOViewer` package would depend on a missing or preview IOScene lower bound, or on a dependency bound that nuget.org
refuses (a bound with metadata, or a prerelease label of one part that does not start with a letter).
Before the tag, run the Revit test with a real Revit 2022 file, which CI does not have: set `IOVIEWER_RVT_FILE` to its path and run `dotnet test IOViewer.slnx -c Release --filter Cli_ConvertRvtToHtml`.
The NuGet policy must name this repository, `release.yml`, the configured NuGet profile and the `IOViewer*` package pattern.

## Licensing contributions

Contributions are licensed under the MIT license. By submitting a
contribution, you confirm that you have the right to contribute it under
that license.

## Questions

Ask questions in GitHub Discussions or repository issues.
