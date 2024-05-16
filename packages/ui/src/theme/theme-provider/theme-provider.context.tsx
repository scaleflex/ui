import React, { FC, useMemo } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';

import { applyPolymorphicFunctionProp } from '../../utils/functions';
import { BorderRadiusSize } from '../../utils/types/shape';
import { Theme } from '../entity';
import { Typography, CommonStyles } from '../roots';
import { defaultPalette } from '../roots/palette';
import { defaultShadows } from '../roots/shadows';
import { getDefaultTypography } from '../roots/typography';

import type { ThemeProviderProps } from './theme-provider.props';
import createBreakpoints from '../roots/breakpoints/entity/create-breakpoints';

const defaultShape = {
  borderRadius: {
    [BorderRadiusSize.Sm]: '2px',
    [BorderRadiusSize.Md]: '4px',
    [BorderRadiusSize.Lg]: '8px',
  },
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme = {} }) => {
  const {
    palette: paletteOverride = {},
    breakpoints: breakpointsOverride = {},
    typography: typographyOverride = {},
    shape: shapeOverride = {},
    shadows: shadowsOverride = {},
  } = theme;

  const finalTheme = useMemo<Theme>(() => {
    const palette = {
      ...defaultPalette,
      ...paletteOverride,
    };
    const breakpoints = createBreakpoints(breakpointsOverride);
    const shadows = {
      ...defaultShadows,
      ...shadowsOverride,
    };

    return {
      palette,
      breakpoints,
      typography: getDefaultTypography(typographyOverride),
      shape: {
        ...merge(
          {
            ...defaultShape,
          },
          {
            ...shapeOverride,
          }
        ),
      },
      shadows,
    };
  }, [JSON.stringify(theme)]);

  return (
    <SCThemeProvider theme={finalTheme}>
      <>
        {applyPolymorphicFunctionProp(children, finalTheme)}

        <CommonStyles />
        <Typography />
      </>
    </SCThemeProvider>
  );
};

export default ThemeProvider;
