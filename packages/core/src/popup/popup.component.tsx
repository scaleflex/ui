import React from 'react';
import { createPortal } from 'react-dom';
import PT, { Validator } from 'prop-types';
import { intrinsicComponent, objectValues, generateClassNames } from '@sfx-ui/utils/functions';
import usePortal from '@sfx-ui/hooks/use-portal';
import PopupContent, { defaultProps as cDefaultProps, propTypes as cPropTypes } from '../popup-content/popup-content.component';
import type { PopupProps, PopupAnchorOriginProps } from './popup.props';
import { Horizontal, Vertical } from './types';
import Styled from './popup.styles';

const Popup = intrinsicComponent<PopupProps, HTMLDivElement>((props, ref): JSX.Element => {
  const target = usePortal(generateClassNames('Popup'));

  const render = (): JSX.Element | null => {
    if (!props.open) {
      return null;
    }

    return (
      <Styled.Popup {...props}>
        <PopupContent {...props} ref={ref} />
      </Styled.Popup>
    );
  };

  return createPortal(
    render(),
    target,
  );
});

Popup.defaultProps = {
  ...cDefaultProps,
  open: false,
  anchorOrigin: {
    vertical: Vertical.Bottom,
    horizontal: Horizontal.Left
  }
};

Popup.propTypes = {
  ...cPropTypes,
  anchorOrigin: PT.exact({
    vertical: PT.oneOf(objectValues(Vertical)),
    horizontal: PT.oneOf(objectValues(Horizontal)),
  }) as Validator<PopupAnchorOriginProps>,
  open: PT.bool,
};

export default Popup;
