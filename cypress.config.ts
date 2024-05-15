import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false,
    specPattern: "cypress/tests/**/*.ts",
    baseUrl: "https://www.simplyhealth.co.uk",
  },
});
