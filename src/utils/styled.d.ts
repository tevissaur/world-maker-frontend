// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    drawerWidth: string;
    colors: {
      main: string;
      secondary: string;
    };
  }
}