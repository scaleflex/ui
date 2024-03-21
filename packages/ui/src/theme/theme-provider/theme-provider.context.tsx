import React, { FC, useMemo } from 'react';
import PT, { Validator } from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';

import { record } from '../../utils/types/prop-types';
import { applyPolymorphicFunctionProp, objectKeys, objectValues } from '../../utils/functions';
import { Breakpoint } from '../../utils/types/css';
import { Color } from '../../utils/types/palette';
import { Shadows } from '../../utils/types/shadows';
import { FontVariant } from '../../utils/types/typography';
import { BorderRadiusSize } from '../../utils/types/shape';
import { Theme, ThemeOverride } from '../entity';
import { Typography, CommonStyles } from '../roots';
import { defaultPalette } from '../roots/palette';
import { defaultShadows } from '../roots/shadows';
import { defaultTypography } from '../roots/typography';
import type { ThemeProviderProps } from './theme-provider.props';
import createBreakpoints from '../roots/breakpoints/entity/create-breakpoints';
import type { Breakpoint as BreakpointsKeys } from '../roots/breakpoints/entity/breakpoints-map';

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
      typography: {
        ...merge(
          {
            ...defaultTypography,
          },
          {
            ...typographyOverride,
          }
        ),
      },
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

const { baseLineHeight, font, ...typography } = defaultTypography;

ThemeProvider.propTypes = {
  children: PT.oneOfType([PT.node, PT.func, PT.arrayOf(PT.node)]).isRequired,
  theme: PT.exact({
    breakpoints: PT.exact({
      keys: PT.arrayOf(PT.string) as Validator<BreakpointsKeys[]>,
      values: PT.exact(record(objectValues(Breakpoint), PT.number)),
      classes: PT.exact(record(objectValues(Breakpoint), PT.string)),
      getBreakpointClass: PT.func,
      up: PT.func,
      down: PT.func,
      between: PT.func,
      only: PT.func,
    }),
    palette: PT.exact(record(objectValues(Color), PT.string)),
    shadows: PT.exact(record(objectValues(Shadows), PT.string)),
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
