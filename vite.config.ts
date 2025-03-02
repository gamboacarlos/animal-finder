import { defineConfig } from "vite"
import { configDefaults } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "node:path"

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
    exclude: [...configDefaults.exclude, "e2e/*"],
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
    coverage: {
      enabled: true,
      include: ["src/components/**/*.tsx", "src/pages/**/*.tsx"],
      exclude: ["**/*.d.ts", "**/types.ts"],
      provider: "v8",
      reporter: ["lcov", "text"],
      reportsDirectory: "./coverage",
      all: true,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
      "#": path.resolve(process.cwd(), "./test"),
    },
  },
})
