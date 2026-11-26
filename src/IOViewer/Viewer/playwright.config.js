import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'test/e2e',
  // Keep Playwright's own artifacts in a subfolder: it empties outputDir, and global setup writes pages to test-results/.
  outputDir: 'test-results/output',
  globalSetup: './test/e2e/global-setup.js',
  forbidOnly: !!process.env.CI,
  reporter: 'list',
  use: {
    locale: 'ru-RU',
    viewport: { width: 1280, height: 800 },
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    {
      name: 'firefox',
      testMatch: ['**/smoke.spec.js', '**/selection.spec.js', '**/sections.spec.js', '**/accessibility.spec.js',
        '**/tree-selection.spec.js', '**/tree-filters.spec.js', '**/federation.spec.js', '**/bcf.spec.js',
        '**/measure-snap.spec.js', '**/point-tools.spec.js'],
      use: {
        browserName: 'firefox',
        // Under Linux, Xvfb supplies the display Firefox uses to create a WebGL context in CI.
        headless: process.platform !== 'linux',
        launchOptions: { firefoxUserPrefs: { 'webgl.force-enabled': true } },
      },
    },
  ],
});
