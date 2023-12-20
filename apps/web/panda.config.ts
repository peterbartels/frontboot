import { defineConfig } from "@pandacss/dev";
// import { flyOutMenuRecipe } from "@frontboot/ui/recipes/flyOutMenu.recipe";
import frontBootPreset from "@frontboot/ui/tokens";
import { flyoutPreset } from "@frontboot/ui/preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  strictTokens: true,
  emitPackage: true,
  jsxFramework: "react",
  outdir: "@frontboot/styled-system",

  presets: ["@pandacss/preset-base", frontBootPreset, flyoutPreset],

  // Where to look for your css declarations
  include: [
    "./node_modules/@frontboot/ui/src/**/*.tsx",
    // './node_modules/@frontboot/ui/dist/panda.json',
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],

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
    // extend: {
    //   slotRecipes: {
    //     flyOutMenu: flyOutMenuRecipe,
    //   },
    // },
  },
});
