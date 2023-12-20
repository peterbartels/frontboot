import { defineConfig } from "@pandacss/dev";
import { flyOutMenuRecipe } from "./src/recipes/flyOutMenu.recipe";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  strictTokens: true,
  emitPackage: true,
  jsxFramework: "react",
  presets: ["@pandacss/preset-base", "./src/tokens"],

  outdir: "@frontboot/styled-system",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        primary: { value: "#0FEE0F" },
        secondary: { value: "#EE0F0F" },
      },
      fonts: {
        body: { value: "system-ui, sans-serif" },
      },
    },
    extend: {
      slotRecipes: {
        flyOutMenu: flyOutMenuRecipe,
      },
    },
  },
});
