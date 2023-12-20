import { definePreset } from "@pandacss/dev";
import type { Preset } from "@pandacss/types";
import { flyOutMenuRecipe } from "./recipes/flyOutMenu.recipe";

export const flyoutPreset = definePreset({
  theme: {
    extend: {
      slotRecipes: { flyOutMenu: flyOutMenuRecipe },
    },
  },
}) as Preset;
