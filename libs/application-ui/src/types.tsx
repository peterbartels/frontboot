declare module '@mui/material/styles' {
  interface Palette {
    darkGrey: Palette['primary'];
  }
  interface PaletteOptions {
    darkGrey: PaletteOptions['primary'];
  }

  interface TypographyVariants {
    introHeader: React.CSSProperties;
    version: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    introHeader?: React.CSSProperties;
    version?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    introHeader: true;
    version: true;
  }
}

export default {};
