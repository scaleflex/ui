import { Breakpoint } from '../../../../utils/types/css';

export const defaultBreakpoints = {
  keys: [Breakpoint.Xs, Breakpoint.Sm, Breakpoint.Md, Breakpoint.Lg, Breakpoint.Xl],
  values: {
    [Breakpoint.Xs]: 0,
    [Breakpoint.Sm]: 576,
    [Breakpoint.Md]: 768,
    [Breakpoint.Lg]: 1084,
    [Breakpoint.Xl]: 1342,
    [Breakpoint.Xxl]: 1600,
    [Breakpoint.Xxxl]: 1920,
  },
  classes: {
    [Breakpoint.Xs]: '.sfx-breakpoint-xs',
    [Breakpoint.Sm]: '.sfx-breakpoint-sm',
    [Breakpoint.Md]: '.sfx-breakpoint-md',
    [Breakpoint.Lg]: '.sfx-breakpoint-lg',
    [Breakpoint.Xl]: '.sfx-breakpoint-xl',
    [Breakpoint.Xxl]: '.sfx-breakpoint-xxl',
    [Breakpoint.Xxxl]: '.sfx-breakpoint-xxxl',
  },
  getBreakpointClass: () => '',
  up: () => '',
  down: () => '',
  between: () => '',
  only: () => '',
};
