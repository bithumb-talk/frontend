import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const COLOR = Object.freeze({
  MAIN: '#F37321',
  POINT: '#D53126',
  TYPO: '#444444',
  RED: '#d60000',
  BLUE: '#0051c7',
});

export const ORAGNE = Object.freeze({
  50: '#ff9800',
  100: '#ffe0b2',
  200: '#ff9800',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  // https://mui.com/customization/color/#main-content
});

export const BREAK_POINT = Object.freeze({
  XS: 414,
  SM: 600,
  MD: 768,
  LG: 992,
  XL: 1200,
});

export const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: COLOR.MAIN,
    },
    default: {
      main: grey[900],
    },
  },
});
