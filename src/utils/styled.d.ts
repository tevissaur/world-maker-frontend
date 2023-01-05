// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    drawerWidth: string;
    colors: {
      light: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      dark: {
        primary: string;
        secondary: string;
        tertiary: string;
      }
      black: string;
      white: string;
    };
    fontFamily: string;
  }
}