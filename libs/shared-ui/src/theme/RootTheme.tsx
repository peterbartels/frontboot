import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { FC, ReactNode } from 'react';
// import { inter } from '../../../../../northlyjs-new/northlyjs-alpha/libs/ui/src/fonts';

const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

export const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

export const frontBootTheme = createTheme({
  typography: {
    introHeader: {
      fontSize: pxToRem(28),
      letterSpacing: '2px',
      color: '#7D7C78',
    },
    version: {
      color: 'red',
      textDecoration: 'underline',
      fontSize: pxToRem(10),
    },
    h4: {
      fontWeight: 500,
    },
    fontFamily: [
      '"Inter"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      // add inter font
      // styleOverrides: inter,
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
          border: '1px dotted #888',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#049CE4',
    },
    secondary: {
      main: '#545365',
    },
    darkGrey: {
      main: '#151515',
      light: '#F7F6F3',
      contrastText: '#fff',
    },
  },
});

interface UiProps {
  children: ReactNode | undefined;
}

export const RootTheme: FC<UiProps> = ({ children }) => {
  return (
    <ThemeProvider theme={frontBootTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default RootTheme;
