import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";
import { defineConfig } from "vitest/config";

export default defineConfig({
  optimizeDeps: {
    include: [
      "@storybook/experimental-addon-test/internal/test-utils",
      "react/jsx-dev-runtime",
    ],
  },
  plugins: [
    storybookTest({
      storybookScript: "pnpm dev --ci",
    }),
  ],
  test: {
    browser: {
      enabled: true,
      headless: true,
      name: "chrome",
      provider: "webdriverio",
    },
    isolate: false,
    setupFiles: ["./.storybook/vitest.setup.ts"],
  },
});
