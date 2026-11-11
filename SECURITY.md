# Security policy

## Supported versions

IOViewer is in preview (0.x). Security fixes are made on the latest release only.

## Reporting a vulnerability

Please do not open a public issue for a security problem. Use GitHub private vulnerability reporting:
open the Security tab of the repository and choose "Report a vulnerability". Include the version of IOViewer, the
command or API call, and a description of the problem. A sample file that triggers it helps, but do not send files
with confidential content.

You can expect an acknowledgement within a few days. Fixes are released as soon as they are verified, and the report
is credited unless you prefer otherwise.

## Scope

IOViewer reads files that can come from untrusted sources and writes HTML that is opened in a browser. Problems that
matter most:

- crashes, hangs or unbounded memory use caused by a crafted `.glb`, `.obj` or `.json` file;
- script injection into the generated HTML through model names, properties or other text taken from the input;
- writing files outside the path a command was given;
- the `--serve` preview server exposing files other than the generated viewer, or listening beyond the local machine;
- any other behaviour of the library that executes code or contacts the network (the library does neither; only the
  CLI `--serve` option opens a local HTTP server).
