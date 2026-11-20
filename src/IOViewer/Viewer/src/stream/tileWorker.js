import { fetchTile, prepareTile, readTile } from './tile.js';

self.onmessage = async ({ data: tile }) => {
  try {
    const html = await fetchTile(`/tiles/${tile.file}`, tile.bytes);
    const result = prepareTile(readTile(html, tile), tile);
    self.postMessage(result, result.batches.flatMap(({ position, normal, index }) => [position.buffer, normal.buffer, index.buffer]));
  } catch (error) {
    self.postMessage({ error: error.message });
  }
};
