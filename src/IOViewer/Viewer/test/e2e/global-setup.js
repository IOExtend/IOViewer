import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

export const viewerDir = path.resolve(import.meta.dirname, '../..');
export const fixturesDir = path.resolve(viewerDir, '../../../tests/fixtures/viewer');
export const LARGE_ELEMENTS = 20000;

// Exports a JSON document to test-results/<name>.html with the CLI, as a user would; `options` are extra CLI flags.
function exportHtml(jsonPath, name, options = []) {
  // The CLI targets net8.0 and net10.0, so `dotnet run` needs an explicit framework.
  const args = ['run', '--project', '../../IOViewer.Cli', '-c', 'Release', '-f', 'net10.0', '--',
    jsonPath, '-o', `test-results/${name}.html`, ...options];
  try {
    execFileSync('dotnet', args, { cwd: viewerDir, stdio: 'pipe' });
  } catch (error) {
    throw new Error(`Exporting ${jsonPath} failed:\n${error.stdout}\n${error.stderr}`, { cause: error });
  }
}

// ViewerDocument JSON with `count` small boxes on one shared geometry, in 4 categories, all of type "Segment 50".
function largeModel(count) {
  const v = (X, Y, Z) => ({ X, Y, Z });
  const axes = { XAxis: v(1, 0, 0), YAxis: v(0, 1, 0), ZAxis: v(0, 0, 1) };
  const corners = [v(0, 0, 0), v(0.3, 0, 0), v(0.3, 0.3, 0), v(0, 0.3, 0), v(0, 0, 0.3), v(0.3, 0, 0.3), v(0.3, 0.3, 0.3), v(0, 0.3, 0.3)];
  const faces = [0, 2, 1, 0, 3, 2, 4, 5, 6, 4, 6, 7, 0, 1, 5, 0, 5, 4, 1, 2, 6, 1, 6, 5, 2, 3, 7, 2, 7, 6, 3, 0, 4, 3, 4, 7];
  const elements = [];
  const meshes = [];
  for (let i = 0; i < count; i++) {
    const id = 900000 + i;
    elements.push({ Id: id, Name: `Pipe ${i}`, Category: `System ${i % 4}`, TypeName: 'Segment 50', Level: 'Level 1', MeshIndices: [i] });
    meshes.push({
      Id: i, Name: `Pipe ${i}`, ElementId: id, Vertices: [], Indices: [], GeometryId: 1,
      Transform: { ...axes, Translation: v((i % 200) * 0.5, Math.floor(i / 200) * 0.5, 0) },
      Color: { R: 120, G: 140, B: 160, A: 255 }, Opacity: 1,
    });
  }
  return { Title: 'Large Model', Elements: elements, Meshes: meshes, Geometries: [{ Id: 1, Vertices: corners, Indices: faces }] };
}

// Two boxes on one shared geometry, the first sheared (YAxis (1, 1, 0), as a non-uniform glTF parent scale over a
// rotated child gives), for the instanced-normal check.
function shearModel() {
  const model = largeModel(2);
  model.Title = 'Shear';
  model.Meshes[0].Transform.YAxis = { X: 1, Y: 1, Z: 0 };
  model.Meshes[1].Transform.Translation = { X: 1, Y: 0, Z: 0 };
  return model;
}

// Exports every committed fixture, the building again opening in white mode, a generated large model for the
// tree virtualization test, the sheared model, the building without the survey marker's element and a copy of the
// building whose binary block is cut in half, as in a truncated file.
export default function globalSetup() {
  for (const file of readdirSync(fixturesDir).filter((f) => f.endsWith('.json'))) {
    exportHtml(path.join(fixturesDir, file), path.basename(file, '.json'));
  }
  exportHtml(path.join(fixturesDir, 'building.json'), 'building-white', ['--white-mode']);
  mkdirSync(path.join(viewerDir, 'test-results'), { recursive: true });
  const large = path.join(viewerDir, 'test-results', 'large.json');
  writeFileSync(large, JSON.stringify(largeModel(LARGE_ELEMENTS)));
  exportHtml(large, 'large');
  const shear = path.join(viewerDir, 'test-results', 'shear.json');
  writeFileSync(shear, JSON.stringify(shearModel()));
  exportHtml(shear, 'shear');
  // Its instance then names no element: Validate() rejects such a scene, but the page still draws it, as element -1.
  const orphan = JSON.parse(readFileSync(path.join(fixturesDir, 'building.json'), 'utf8'));
  orphan.Scene.Elements = orphan.Scene.Elements.filter((e) => e.Name !== 'Survey Marker');
  const orphanPath = path.join(viewerDir, 'test-results', 'orphan.json');
  writeFileSync(orphanPath, JSON.stringify(orphan));
  exportHtml(orphanPath, 'orphan');

  const results = path.join(viewerDir, 'test-results');
  const html = readFileSync(path.join(results, 'building.html'), 'utf8');
  const bin = /(<script id="ioviewer-bin" type="application\/octet-stream">)([^<]*)/;
  if (!bin.test(html)) throw new Error('building.html has no BIN block.');
  writeFileSync(path.join(results, 'damaged.html'), html.replace(bin, (_, open, data) => open + data.slice(0, (data.length >> 1) & ~3)));
}
