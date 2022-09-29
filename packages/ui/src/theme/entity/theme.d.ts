import type { DefaultTheme } from 'styled-components';
import type { With } from '../../utils/types';
import type { Breakpoints } from '../roots/breakpoints';
import type { ColorsMap } from '../roots/palette';
import type { TypographyProps } from '../roots/typography';
import type { ShapeProps } from '../roots/shape';

export interface Theme {
  readonly breakpoints: Breakpoints;

  readonly palette: ColorsMap;

  readonly typography: TypographyProps;

  readonly shape: ShapeProps;
}

export interface ThemeOverride extends Omit<Partial<Theme>> {
  readonly breakpoints?: Theme['breakpoints'];

  readonly palette?: Partial<Record<Partial<Theme['palette']>>>;

  readonly typography?: TypographyProps;

  readonly shape?: ShapeProps;
}

export type WithTheme<T = undefined> = With<T, { theme: DefaultTheme }>;
