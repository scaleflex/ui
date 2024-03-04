import React from 'react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createGlobalStyle} from 'styled-components';
import ThemeProvider from '@scaleflex/ui/theme';



const GlobalStyles = createGlobalStyle`
  html {
    font-size: 14px;
  }

  body {
    height: 100%;
    color: #131f2b;
    // background-color: #f8fafb;
    font-family: 'Roboto';
  }

  main {
    flex-grow: 1;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
    Provider: ThemeProvider ,
  }),
];

export const parameters = {
  controls: {
    expanded: true,
  },
  breakpoints: {
    breakpointNames: {
      'xs': "0",
      'sm': "768",
      'md': "1201",
      'lg': "1921",
      'xl': "2560",
    }
  },
  viewport: {
    viewports : {
      sm: {
        name: 'Small',
        styles : {
          width: '768px',
          height : '681px'
        },
        type: 'tablet'
      },
      md: {
        name: 'medium',
        styles : {
          width: '1201px',
          height : '681px'
        },
        type: 'desktop'
      },
      lg: {
        name: 'large',
        styles : {
          width: '1921px',
          height : '681px'
        },
        type: 'desktop'
      },
      xl: {
        name: 'xLarge',
        styles : {
          width: '2560px',
          height : '681px'
        },
        type: 'desktop'
      },
     },
   }
};
