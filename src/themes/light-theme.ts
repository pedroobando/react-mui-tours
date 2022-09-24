import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

export const lightTheme = createTheme({
  typography: {
    body3: {
      fontSize: 10,
    },
    body2: {
      fontSize: 12,
    },
  },
  palette: {
    mode: 'light',
    background: {
      default: grey[300],
    },
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#19858c',
    },
    error: {
      main: red.A400,
    },
  },
});
