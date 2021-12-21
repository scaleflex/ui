import React, { FC, useMemo } from 'react';
import PT, { Validator } from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';

import { record } from '../../utils/types/prop-types';
import { applyPolymorphicFunctionProp, objectKeys, objectValues } from '../../utils/functions';
import { Breakpoint } from '../../utils/types/css';
import { Color } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import { BorderRadiusSize } from '../../utils/types/shape';

import { Theme, ThemeOverride, defaultTheme } from '../entity';
import { Typography, CommonStyles } from '../roots';
import { defaultPalette } from '../roots/palette';

import type { ThemeProviderProps } from './theme-provider.props';

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme = {} }) => {
  const {
    palette: paletteOverride = {},
    breakpoints: breakpointsOverride = {},
    typography: typographyOverride = {},
    shape: shapeOverride = {},
  } = theme;

  const finalTheme = useMemo<Theme>(() => {
    const palette = {
      ...defaultPalette,
      ...paletteOverride,
    };

    return {
      palette,
      breakpoints: {
        ...defaultTheme.breakpoints,
        ...breakpointsOverride,
      },
      typography: {
        ...merge(
          {
            ...defaultTheme.typography,
          },
          {
            ...typographyOverride,
          }
        ),
      },
      shape: {
        ...merge(
          {
            ...defaultTheme.shape,
          },
          {
            ...shapeOverride,
          }
        ),
      },
    };

    return {} as Theme;
  }, [JSON.stringify(theme)]);

  return (
    <SCThemeProvider theme={finalTheme}>
      {applyPolymorphicFunctionProp(children, finalTheme)}

      <CommonStyles />
      <Typography />
    </SCThemeProvider>
  );
};

const { baseLineHeight, font, ...typography } = defaultTheme.typography;

ThemeProvider.propTypes = {
  children: PT.oneOfType([PT.node, PT.func]),
  theme: PT.exact({
    breakpoints: PT.exact(record(objectValues(Breakpoint), PT.number)),
    palette: PT.exact(record(objectValues(Color), PT.string)),
    shape: PT.exact({
      borderRadius: PT.exact(record(objectValues(BorderRadiusSize), PT.string)),
    }),
    typography: PT.exact({
      baseLineHeight: PT.oneOfType([PT.string, PT.number]),
      font: PT.exact(record(objectValues(FontVariant), PT.object)),
      ...record(objectKeys(typography), PT.string),
    }),
  }) as Validator<ThemeOverride>,
};

export default ThemeProvider;
