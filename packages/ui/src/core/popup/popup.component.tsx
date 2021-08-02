import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PT, { Validator } from 'prop-types';

import { intrinsicComponent, objectValues, generateClassNames } from '../../utils/functions';
import usePortal from '../../hooks/use-portal';
import PopupContent, {
  defaultProps as cDefaultProps,
  propTypes as cPropTypes,
} from '../popup-content/popup-content.component';
import type { PopupProps, PopupAnchorOriginProps } from './popup.props';
import { Horizontal, Vertical } from './types';
import Styled from './popup.styles';

const Popup = intrinsicComponent<PopupProps, HTMLDivElement>((props, ref): JSX.Element => {
  const { autoHideDuration, anchorOrigin, open, onClose, ...rest } = props;
  const target = usePortal(generateClassNames('Popup'));

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (open && autoHideDuration && typeof onClose === 'function') {
      timeout = setTimeout(onClose, autoHideDuration);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [autoHideDuration, open, onClose]);

  const render = (): JSX.Element | null => {
    if (!open) {
      return null;
    }

    return (
      <Styled.Popup {...props}>
        <PopupContent {...rest} ref={ref} />
      </Styled.Popup>
    );
  };

  return createPortal(render(), target);
});

Popup.defaultProps = {
  ...cDefaultProps,
  open: false,
  anchorOrigin: {
    vertical: Vertical.Bottom,
    horizontal: Horizontal.Left,
  },
};

Popup.propTypes = {
  ...cPropTypes,
  anchorOrigin: PT.exact({
    vertical: PT.oneOf(objectValues(Vertical)),
    horizontal: PT.oneOf(objectValues(Horizontal)),
  }) as Validator<PopupAnchorOriginProps>,
  open: PT.bool,
  autoHideDuration: PT.number,
  onClose: PT.func,
};

export default Popup;
