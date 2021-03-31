/* eslint-disable react/forbid-prop-types */
import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import PT, { Validator } from 'prop-types';
import { usePopper } from 'react-popper';

import usePortal from '../../hooks/use-portal';
import { intrinsicComponent, generateClassNames, useForkRef, objectValues } from '../../utils/functions';
import { Position, Strategy } from './types';
import type { PopperProps, PopperOptions, Modifiers } from './popper.props';
import Styled from './popper.styles';

const Popper = intrinsicComponent<PopperProps, HTMLDivElement>(
  (
    {
      anchorEl,
      children,
      open,
      position: initialPlacement = 'bottom',
      popperOptions,
      onClick,
      overlay = false,
    }: PopperProps,
    ref
  ): JSX.Element => {
    const target = usePortal(generateClassNames('Popper'));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const overlayTarget = document.querySelector('body')!;
    const Ref = useRef(null);
    const ownRef = useForkRef(Ref, ref);

    let popperModifiers: Modifiers = [];

    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }

    const popper = usePopper(anchorEl, Ref.current, {
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
      [ownRef]
    );

    if (!open) {
      return <div ref={handleRef} />;
    }
    const render = (): JSX.Element => (
      <Styled.Popper ref={handleRef} style={popper.styles.popper} {...popper.attributes.popper}>
        {children}
      </Styled.Popper>
    );

    const passEventToUnderlayingEvent = (event: React.MouseEvent<HTMLDivElement>): void => {
      setTimeout(() => {
        if (event.clientX && event.clientY) {
          const elem = document.elementFromPoint(event.clientX, event.clientY);
          if (elem) {
            elem.dispatchEvent(event.nativeEvent);
          }
        }
      }, 0);
    };

    const handleOnClicking = (event: React.MouseEvent<HTMLDivElement>): void => {
      event.persist();
      event.preventDefault();
      event.stopPropagation();

      if (onClick) {
        onClick(event);
      }
      passEventToUnderlayingEvent(event);
    };

    const renderOverlay = (): JSX.Element => <Styled.Overlay onClick={handleOnClicking} />;

    return (
      <>
        {createPortal(render(), target)}

        {overlay && createPortal(renderOverlay(), overlayTarget)}
      </>
    );
  }
);

Popper.defaultProps = {};

export const propTypes = {
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
      })
    ) as Validator<Modifiers>,
    onFirstUpdate: PT.func,
    placement: PT.oneOf(objectValues(Position)),
    strategy: PT.oneOf(objectValues(Strategy)),
  }) as Validator<PopperOptions>,
  overlay: PT.bool,
};

Popper.propTypes = propTypes;

export default Popper;
