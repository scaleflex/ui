import React, { FC, useMemo } from 'react';
import PT, { Validator } from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
// import merge from 'lodash.merge';

import { record } from '@sfx-ui/utils/types/prop-types';
import { applyPolymorphicFunctionProp, objectKeys, objectValues } from '@sfx-ui/utils/functions';
import { Breakpoint } from '@sfx-ui/utils/types/css';
import { Color } from '@sfx-ui/utils/types/palette';

import { Theme, ThemeOverride, defaultTheme } from '../entity';
import { Reset, Typography } from '../roots';
import { defaultPalette } from '../roots/palette';

import type { ThemeProviderProps } from './theme-provider.props';

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme = {} }) => {
  const {
    palette: paletteOverride = {},
    breakpoints: breakpointsOverride = {},
    typography: typographyOverride = {},
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
        ...defaultTheme.typography,
        ...typographyOverride,
      },
    };

    return {} as Theme;
  }, [JSON.stringify(theme)]);

  return (
    <SCThemeProvider theme={finalTheme}>
      {applyPolymorphicFunctionProp(children, finalTheme)}

      {/* <Reset /> */}
      <Typography />
    </SCThemeProvider>
  );
};

const { baseLineHeight, ...typography } = defaultTheme.typography;

ThemeProvider.propTypes = {
  children: PT.oneOfType([PT.node, PT.func]),
  theme: PT.exact({
    breakpoints: PT.exact(record(objectValues(Breakpoint), PT.number)),
    palette: PT.exact(record(objectValues(Color), PT.string)),
    typography: PT.exact({
      baseLineHeight: PT.oneOfType([PT.string, PT.number]),
      ...record(objectKeys(typography), PT.string),
    }),
  }) as Validator<ThemeOverride>,
};

export default ThemeProvider;
