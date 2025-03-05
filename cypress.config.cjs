const { defineConfig } = require("cypress")

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
  },
  experimentalSourceRewriting: true,
})
