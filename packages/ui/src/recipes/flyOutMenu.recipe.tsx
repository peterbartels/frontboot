import { defineSlotRecipe } from "@pandacss/dev";

export const flyOutMenuRecipe = defineSlotRecipe({
  className: "flyOutMenu",
  slots: ["root", "item"],
  base: {
    root: {
      bg: "blue.7",
      display: "flex",
    },
    item: {
      bg: "bg.default",
    },
  },
});
