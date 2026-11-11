import { execFileSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import path from 'node:path';

export const viewerDir = path.resolve(import.meta.dirname, '../..');
export const fixturesDir = path.resolve(viewerDir, '../../../tests/fixtures/viewer');

// Exports every fixture to test-results/<name>.html with the CLI, as a user would.
export default function globalSetup() {
  for (const file of readdirSync(fixturesDir).filter((f) => f.endsWith('.json'))) {
    const name = path.basename(file, '.json');
    // The CLI targets net8.0 and net10.0, so `dotnet run` needs an explicit framework.
    const args = ['run', '--project', '../../IOViewer.Cli', '-c', 'Release', '-f', 'net10.0', '--',
      path.join(fixturesDir, file), '-o', `test-results/${name}.html`];
    try {
      execFileSync('dotnet', args, { cwd: viewerDir, stdio: 'pipe' });
    } catch (error) {
      throw new Error(`Exporting ${file} failed:\n${error.stdout}\n${error.stderr}`, { cause: error });
    }
  }
}
