import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'test/e2e',
  // Keep Playwright's own artifacts in a subfolder: it empties outputDir, and global setup writes pages to test-results/.
  outputDir: 'test-results/output',
  globalSetup: './test/e2e/global-setup.js',
  forbidOnly: !!process.env.CI,
  reporter: 'list',
  use: {
    browserName: 'chromium',
    locale: 'ru-RU',
    viewport: { width: 1280, height: 800 },
  },
});
