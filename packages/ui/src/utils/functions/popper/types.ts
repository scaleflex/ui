import type { Placement, ModifierPhases } from './enums';

export type Obj = { [key: string]: any };

export type VisualViewport = EventTarget & {
  width: number,
  height: number,
  offsetLeft: number,
  offsetTop: number,
  scale: number,
};

export type Window = {
  Element: Element,
  HTMLElement: HTMLElement,
  Node: Node,
  devicePixelRatio: number,
  visualViewport?: VisualViewport,
  ShadowRoot: ShadowRoot,
  innerHeight: number,
  offsetHeight: number,
  innerWidth: number,
  offsetWidth: number,
  pageXOffset: number,
  pageYOffset: number,
  getComputedStyle: typeof getComputedStyle,
  addEventListener(type: any, listener: any, optionsOrUseCapture?: any): void,
  removeEventListener(
    type: any,
    listener: any,
    optionsOrUseCapture?: any
  ): void,
  toString(): '[object Window]',
};

export type Rect = {
  width: number,
  height: number,
  x: number,
  y: number,
};

export type StateRects = {
  reference: Rect,
  popper: Rect,
};

export type Offsets = {
  y: number,
  x: number,
};

export type PositioningStrategy = 'absolute' | 'fixed';

export type OffsetData = { [key in Placement]: Offsets }

export type State = {
  [key: string]: any,
  elements: {
    [key: string]: any,
    reference: Element | VirtualElement,
    popper: HTMLElement,
    arrow?: HTMLElement,
  },
  options: OptionsGeneric<any>,
  placement: Placement,
  strategy?: PositioningStrategy,
  orderedModifiers?: Array<Modifier<any, any>>,
  rects?: StateRects,
  scrollParents?: {
    reference: Array<Element | Window | VisualViewport>,
    popper: Array<Element | Window | VisualViewport>,
  },
  styles: {
    [key: string]: CSSStyleDeclaration,
  },
  attributes: {
    [key: string]: { [key: string]: string | boolean },
  },
  modifiersData: {
    [key: string]: any,
    arrow?: {
      x?: number,
      y?: number,
      centerOffset: number,
    },
    hide?: {
      isReferenceHidden: boolean,
      hasPopperEscaped: boolean,
      referenceClippingOffsets: SideObject,
      popperEscapeOffsets: SideObject,
    },
    offset?: OffsetData,
    preventOverflow?: Offsets,
    popperOffsets?: Offsets,
  },
  reset?: boolean,
};

export type Instance = {
  state: State,
  destroy: () => void,
  forceUpdate: () => void,
  update: () => Promise<State>,
  setOptions: (options: OptionsGeneric<any>) => Promise<State>,
};

export type ClientRectObject = {
  x: number,
  y: number,
  top: number,
  left: number,
  right: number,
  bottom: number,
  width: number,
  height: number,
};

export type SideObject = {
  top: number,
  left: number,
  right: number,
  bottom: number,
};

export type Padding = number | SideObject;

export type VirtualElement = {
  getBoundingClientRect: () => ClientRect | DOMRect,
  contextElement?: Element,
};

export type ModifierArguments<Options> = {
  state: State,
  instance: Instance,
  options: Options,
  name: string,
};

export type Modifier<Name, Options> = {
  name?: Name,
  enabled?: boolean,
  phase?: ModifierPhases,
  requires?: Array<string>,
  requiresIfExists?: Array<string>,
  fn?: () => State | void,
  effect?: () => (() => void) | void,
  options?: Options,
  data?: Obj,
};

export type OptionsGeneric<TModifier> = {
  placement: Placement,
  modifiers: Array<TModifier>,
  strategy: PositioningStrategy,
  onFirstUpdate?: (state: State) => void,
};

