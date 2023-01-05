// my-theme.ts
import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  borderRadius: '5px',
  drawerWidth: '240px',
  colors: {
    light: {
      primary: '#1F2926',
      secondary: '#52655F',
      tertiary: '#8B9D83',
    },
    dark: {
      primary: '#121615',
      secondary: '#3A4E48',
      tertiary: '#6A7B76',
    },
    black: '#040303',
    white: '#BEB0A7'
  },
  fontFamily: "Helvetica"
};

export { myTheme };