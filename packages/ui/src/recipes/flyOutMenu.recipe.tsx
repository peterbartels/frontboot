import { defineSlotRecipe } from "@pandacss/dev";

export const flyOutMenuRecipe = defineSlotRecipe({
  className: "flyOutMenu",
  slots: ["root", "item", "popover"],
  base: {
    root: {
      bg: "red.9",
      color: "white",
      display: "flex",
      padding: 4,
      paddingInlineStart: 20,
    },
    item: {
      bg: "bg.default",
    },
    popover: {
      bg: "yellow.9",
      padding: 2,
      section: {
        display: "flex",
        gap: 2,
      },
    },
  },
});
