import type { DefaultTheme } from 'styled-components';
import type { With } from '../../utils/types';
import type { BreakpointsMap } from '../roots/breakpoints';
import type { ColorsMap } from '../roots/palette';
import type { TypographyProps } from '../roots/typography';
import type { ShapeProps } from '../roots/shape';

export interface Theme {
  readonly breakpoints: BreakpointsMap;

  readonly palette: ColorsMap;

  readonly typography: TypographyProps;

  readonly shape: ShapeProps;
}

export interface ThemeOverride extends Omit<Partial<Theme>> {
  readonly breakpoints?: Partial<Theme['breakpoints']>;

  readonly palette?: Partial<Record<Partial<Theme['palette']>>>;

  readonly typography?: TypographyProps;

  readonly shape?: ShapeProps;
}

export type WithTheme<T = undefined> = With<T, { theme: DefaultTheme }>;
