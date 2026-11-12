import { defineConfig } from '@playwright/test';

// Performance harness (`npm run perf`), never part of `npm run e2e`. Headed: hidden windows pause requestAnimationFrame.
// PERF_GPU=integrated asks Chromium for the low-power GPU, PERF_GPU=swiftshader renders on the CPU (worst case).
// Frames follow the display refresh as for users; PERF_UNCAPPED=1 unties them so fps above the refresh rate shows.
const UNCAPPED = ['--disable-gpu-vsync', '--disable-frame-rate-limit'];
const GPU_FLAGS = { integrated: ['--force_low_power_gpu'], swiftshader: ['--use-angle=swiftshader'] };

export default defineConfig({
  testDir: 'test/perf',
  testMatch: '*.perf.js',
  outputDir: 'test-results/perf-output',
  timeout: 30 * 60 * 1000,
  workers: 1,
  reporter: 'list',
  use: {
    browserName: 'chromium',
    headless: false,
    locale: 'ru-RU',
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
    launchOptions: { args: ['--enable-precise-memory-info', ...(process.env.PERF_UNCAPPED ? UNCAPPED : []), ...(GPU_FLAGS[process.env.PERF_GPU] ?? [])] },
  },
});
