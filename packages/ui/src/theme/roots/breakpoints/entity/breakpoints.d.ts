import { Breakpoint, BreakpointClass } from './breakpoints-map';

export interface Breakpoints {
  keys: Breakpoint[];
  /**
   * Each breakpoint (a key) matches with a fixed screen width (a value).
   * @default {
   *    // extra-small
   *    xs: 0,
   *    // small
   *    sm: 600,
   *    // medium
   *    md: 900,
   *    // large
   *    lg: 1200,
   *    // extra-large
   *    xl: 1536,
   * }
   */
  values: { [key in Breakpoint]: number };
  /**
   *    // extra-small
   *    xs: '.sfx-breakpoint-xs',
   *    // small
   *    sm:'.sfx-breakpoint-sm',
   *    // medium
   *    md:'.sfx-breakpoint-md',
   *    // large
   *    lg:'.sfx-breakpoint-lg',
   *    // extra-large
   *    xl: '.sfx-breakpoint-xl',
   * }
   */
  classes: { [key in Breakpoint]: BreakpointClass };
  /**
   * @param width - A breakpoint width..
   * @returns A breakpoint class ready to be used with styled components, it will be applied when it matches the nearest breakpoint intialized in the theme.
   */
  getBreakpointClass: (width: number, hideSelector?: boolean) => BreakpointClass;
  /**
   * @param width - A breakpoint width.
   * @returns A media query string ready to be used with styled components, which matches screen width greater than the screen size given by the breakpoint key.
   */
  up: (key: Breakpoint) => string;
  /**
   * @param key - A breakpoint key (`xs`, `sm`, etc).
   * @returns  A media query string ready to be used with styled components, which matches screen width less than the screen size given by the breakpoint key.
   */
  down: (key: Breakpoint) => string;
  /**
   * @param start -  A breakpoint key (`xs`, `sm`, etc).
   * @param end -  A breakpoint key (`xs`, `sm`, etc).
   * @returns A media query string ready to be used with styled components, which matches screen width greater than the screen size given by the breakpoint key in the first argument and less than the screen size given by the breakpoint key in the second argument.
   */
  between: (start: Breakpoint, end: Breakpoint) => string;
  /**
   * @param key - A breakpoint key (`xs`, `sm`, etc).
   * @returns A media query string ready to be used with styled components, which matches screen width starting from the screen size given by the breakpoint key and stopping at the screen size given by the next breakpoint key.
   */
  only: (key: Breakpoint) => string;
}

// export interface BreakpointsOptions extends Partial<Breakpoints> {
//   /**
//    * The unit used for the breakpoint's values.
//    * @default 'px'
//    */
//   unit?: string | undefined;
// }
