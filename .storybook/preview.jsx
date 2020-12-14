import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { createGlobalStyle } from 'styled-components';

import ThemeProvider from '@sfx-ui/theme';
import { FontWeight } from '@sfx-ui/utils/types/typography';

import SSPBlack from './public/assets/fonts/SourceSansPro/SourceSansPro-Black.ttf';
import SSPBold from './public/assets/fonts/SourceSansPro/SourceSansPro-Bold.ttf';
import SSPSemiBold from './public/assets/fonts/SourceSansPro/SourceSansPro-SemiBold.ttf';
import SSPRegular from './public/assets/fonts/SourceSansPro/SourceSansPro-Regular.ttf';
import SSPLight from './public/assets/fonts/SourceSansPro/SourceSansPro-Light.ttf';

import MBlack from './public/assets/fonts/Merriweather/Merriweather-Black.ttf';
import MRegular from './public/assets/fonts/Merriweather/Merriweather-Regular.ttf';
import MLight from './public/assets/fonts/Merriweather/Merriweather-Light.ttf';

import IExtraBold from './public/assets/fonts/Inconsolata/Inconsolata-ExtraBold.ttf';
import IRegular from './public/assets/fonts/Inconsolata/Inconsolata-Regular.ttf';
import ILight from './public/assets/fonts/Inconsolata/Inconsolata-Light.ttf';

const formatSrc = (url) => {
  return `url(${url}) format('truetype')`;
};

const body = {
  black: formatSrc(SSPBlack),
  bold: formatSrc(SSPBold),
  semiBold: formatSrc(SSPSemiBold),
  regular: formatSrc(SSPRegular),
  light: formatSrc(SSPLight),
};

const article = {
  black: formatSrc(MBlack),
  regular: formatSrc(MRegular),
  light: formatSrc(MLight),
};

const code = {
  extraBold: formatSrc(IExtraBold),
  regular: formatSrc(IRegular),
  light: formatSrc(ILight),
};

const Fonts = createGlobalStyle`
  // @font-face {
  //   font-family: 'Source Sans Pro';
  //   font-weight: ${FontWeight.Black};
  //   src: ${body.black};
  // }

  // @font-face {
  //   font-family: 'Source Sans Pro';
  //   font-weight: ${FontWeight.Bold};
  //   src: ${body.bold};
  // }

  // @font-face {
  //   font-family: 'Source Sans Pro';
  //   font-weight: ${FontWeight.SemiBold};
  //   src: ${body.semiBold};
  // }

  // @font-face {
  //   font-family: 'Source Sans Pro';
  //   font-weight: ${FontWeight.Regular};
  //   src: ${body.regular};
  // }

  // @font-face {
  //   font-family: 'Source Sans Pro';
  //   font-weight: ${FontWeight.Light};
  //   src: ${body.light};
  // }

  // @font-face {
  //   font-family: Merriweather;
  //   font-weight: ${FontWeight.Black};
  //   src: ${article.black};
  // }

  // @font-face {
  //   font-family: Merriweather;
  //   font-weight: ${FontWeight.Regular};
  //   src: ${article.regular};
  // }

  // @font-face {
  //   font-family: Merriweather;
  //   font-weight: ${FontWeight.Light};
  //   src: ${article.light};
  // }

  // @font-face {
  //   font-family: Inconsolata;
  //   font-weight: ${FontWeight.ExtraBold};
  //   src: ${code.extraBold};
  // }

  // @font-face {
  //   font-family: Inconsolata;
  //   font-weight: ${FontWeight.Regular};
  //   src: ${code.regular};
  // }

  // @font-face {
  //   font-family: Inconsolata;
  //   font-weight: ${FontWeight.Light};
  //   src: ${code.light};
  // }
`;

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    color: #131f2b;
    // background-color: #f8fafb;
  }

  main {
    flex-grow: 1;
  }
`;

export const decorators = [
  jsxDecorator,
  (StoryFn) => {
    return (
      <ThemeProvider
        // theme={{
        //   typography: {
        //     font: {
        //       'btn-lg': {
        //         fontSize: '40px'
        //       }
        //     }
        //   }
        // }}
      >
        <style>
          @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
        </style>

        <main>{StoryFn()}</main>

        <Fonts />
        <GlobalStyle />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  controls: {
    expanded: true,
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
};
