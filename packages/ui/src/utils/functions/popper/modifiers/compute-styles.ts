import type {
  PositioningStrategy,
  Offsets,
  Modifier,
  ModifierArguments,
  Rect,
} from '../types';
import {
  BasePlacement, top, left, right, bottom
} from '../enums';
import getOffsetParent from '../dom-utils/get-offset-parent';
import getWindow from '../dom-utils/get-window';
import getDocumentElement from '../dom-utils/get-document-element';
import getBasePlacement from '../utils/get-base-placement';

export type Options = {
  gpuAcceleration: boolean,
  adaptive: boolean,
  roundOffsets: boolean,
};

const unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto',
};

// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR({ x, y }): Offsets {
  const win = window;
  const dpr = win.devicePixelRatio || 1;

  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0,
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function mapToStyles({
  popper,
  popperRect,
  placement,
  offsets,
  position,
  gpuAcceleration,
  adaptive,
  roundOffsets,
}: {
  popper: HTMLElement,
  popperRect: Rect,
  placement: BasePlacement,
  offsets: { x: number, y: number, centerOffset: number },
  position: PositioningStrategy,
  gpuAcceleration: boolean,
  adaptive: boolean,
  roundOffsets: boolean,
}) {
  let { x = 0, y = 0 } = roundOffsets ? roundOffsetsByDPR(offsets) : offsets;

  const hasX = offsets.hasOwnProperty('x');
  const hasY = offsets.hasOwnProperty('y');

  let sideX: string = left;
  let sideY: string = top;

  const win = window;

  if (adaptive) {
    let offsetParent = getOffsetParent(popper);
    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
    }

    if (placement === top) {
      sideY = bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  const commonStyles = {
    position,
    ...(adaptive && unsetSides),
  };
  if (gpuAcceleration) {
    return {
      ...commonStyles,
      [sideY]: hasY ? '0' : '',
      [sideX]: hasX ? '0' : '',
      // Layer acceleration can disable subpixel rendering which causes slightly
      // blurry text on low PPI displays, so we want to use 2D transforms
      // instead
      transform:
        (win.devicePixelRatio || 1) < 2
          ? `translate(${x}px, ${y}px)`
          : `translate3d(${x}px, ${y}px, 0)`,
    };
  }

  return {
    ...commonStyles,
    [sideY]: hasY ? `${y}px` : '',
    [sideX]: hasX ? `${x}px` : '',
    transform: '',
  };
}

function computeStyles({ state, options }: ModifierArguments<Options>): void {
  const {
    gpuAcceleration = true,
    adaptive = true,
    roundOffsets = true,
  } = options;

  const commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = {
      ...state.styles.popper,
      ...mapToStyles({
        ...commonStyles,
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets,
      }),
    };
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = {
      ...state.styles.arrow,
      ...mapToStyles({
        ...commonStyles,
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets,
      }),
    };
  }

  state.attributes.popper = {
    ...state.attributes.popper,
    'data-popper-placement': state.placement,
  };
}

export type ComputeStylesModifier = Modifier<'computeStyles', Options>;
export default ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {},
});
