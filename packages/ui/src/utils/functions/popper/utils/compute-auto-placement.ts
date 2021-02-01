import type { State, Padding } from '../types';
import type {
  Placement,
  ComputedPlacement,
  Boundary,
  RootBoundary,
} from '../enums';
import getVariation from './get-variation';
import {
  variationPlacements,
  basePlacements,
  placements as allPlacements,
} from '../enums';
import detectOverflow from './detect-overflow';
import getBasePlacement from './get-base-placement';

type Options = {
  placement: Placement,
  padding: Padding,
  boundary: Boundary,
  rootBoundary: RootBoundary,
  flipVariations: boolean,
  allowedAutoPlacements?: Array<Placement>,
};

/*:: type OverflowsMap = { [ComputedPlacement]: number }; */
/* ;; type OverflowsMap = { [key in ComputedPlacement]: number }; */

export default function computeAutoPlacement(
  state: State,
  options: Options
): Array<ComputedPlacement> {
  const {
    placement,
    boundary,
    rootBoundary,
    padding,
    flipVariations,
    allowedAutoPlacements = allPlacements,
  } = options;

  const variation = getVariation(placement);

  const placements = variation
    ? (flipVariations
      ? variationPlacements
      : variationPlacements.filter(
        (placement) => getVariation(placement) === variation
      ))
    : basePlacements;

  let allowedPlacements = placements.filter(
    (placement) => allowedAutoPlacements.includes(placement)
  );

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    // if (__DEV__) {
    //   console.error(
    //     [
    //       'Popper: The `allowedAutoPlacements` option did not allow any',
    //       'placements. Ensure the `placement` option matches the variation',
    //       'of the allowed placements.',
    //       'For example, "auto" cannot be used to allow "bottom-start".',
    //       'Use "auto-start" instead.',
    //     ].join(' ')
    //   );
    // }
  }

  const overflows: OverflowsMap = allowedPlacements.reduce((acc, placement) => {
    acc[placement] = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      padding,
    })[getBasePlacement(placement)];

    return acc;
  }, {});

  return Object.keys(overflows).sort((a, b) => overflows[a] - overflows[b]);
}
