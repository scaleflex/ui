import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import ThemeProvider from '@scaleflex/ui/theme';

export const decorators = [
  withThemeFromJSXProvider({
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
   },
  options: {
      storySort: {
        order: ['Inputs', 'DataDisplay', 'Surfaces', 'Navigation', 'Feedback', 'Theme']
      }
    },
};
