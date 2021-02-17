/* eslint-disable react/forbid-prop-types */
import React, {
  useRef
} from 'react';
import { createPortal } from 'react-dom';
import PT, { Validator } from 'prop-types';
import { usePopper } from 'react-popper';

import usePortal from '../../hooks/use-portal';
import {
  intrinsicComponent, generateClassNames, useForkRef, objectValues
} from '../../utils/functions';
import { Position, Strategy } from './types';
import type { PopperProps, PopperOptions, Modifiers } from './popper.props';

const Popper = intrinsicComponent<PopperProps, HTMLDivElement>((
  {
    anchorEl, children, open, position: initialPlacement = 'bottom',
    popperOptions,
  }: PopperProps,
  ref
): JSX.Element => {
  const target = usePortal(generateClassNames('Popper'));
  const tooltipRef = useRef(null);
  const ownRef = useForkRef(tooltipRef, ref);

  let popperModifiers: Modifiers = [];

  if (popperOptions && popperOptions.modifiers != null) {
    popperModifiers = popperModifiers.concat(popperOptions.modifiers);
  }

  const popper = usePopper(anchorEl, tooltipRef.current, {
    placement: initialPlacement,
    ...popperOptions,
    modifiers: popperModifiers,
  });

  const handleRef = React.useCallback(
    (node) => {
      if (typeof ownRef === 'function') {
        ownRef(node);
      }
    },
    [ownRef],
  );

  if (!open) {
    return (
      <div ref={handleRef} />
    );
  }
  const render = (): JSX.Element => (
    <div ref={handleRef} style={popper.styles.popper} {...popper.attributes.popper}>
      {children}
    </div>
  );

  return (
    createPortal(
      render(),
      target
    )
  );
});

Popper.defaultProps = {

};

Popper.propTypes = {
  anchorEl: PT.instanceOf(Element),

  popperOptions: PT.shape({
    modifiers: PT.arrayOf(
      PT.shape({
        data: PT.object,
        effect: PT.func,
        enabled: PT.bool,
        fn: PT.func,
        name: PT.any.isRequired,
        options: PT.object,
        phase: PT.oneOf([
          'afterMain',
          'afterRead',
          'afterWrite',
          'beforeMain',
          'beforeRead',
          'beforeWrite',
          'main',
          'read',
          'write',
        ]),
        requires: PT.arrayOf(PT.string),
        requiresIfExists: PT.arrayOf(PT.string),
      }),
    ) as Validator<Modifiers>,
    onFirstUpdate: PT.func,
    placement: PT.oneOf(objectValues(Position)),
    strategy: PT.oneOf(objectValues(Strategy)),
  }) as Validator<PopperOptions>,

};

export default Popper;
