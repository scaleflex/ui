import React from 'react';
import PT from 'prop-types';
import CrossOutline from '@scaleflex/icons/cross-outline';
import { Color } from '../../utils/types/palette';
import { lightPalette } from '../../theme/roots/palette';

import { intrinsicComponent } from '../../utils/functions';
import PopupStatus from '../popup-status';
import {
  defaultProps as popupStatusDefaultProps,
  propTypes as popupStatusPropTypes,
} from '../popup-status/popup-status.component';
import type { PopupContentProps } from './popup-content.props';
import Styled from './popup-content.styles';

const PopupContent = intrinsicComponent<PopupContentProps, HTMLDivElement>(
  ({ onClose, message, status, ...rest }, ref): JSX.Element => (
    <Styled.PopupContent message={message} {...rest} ref={ref}>
      <Styled.PopupStatus status={status} message={message} {...rest}>
        <PopupStatus status={status} />
      </Styled.PopupStatus>

      <Styled.LabelWrapper>
        <Styled.Label>{message}</Styled.Label>
      </Styled.LabelWrapper>

      <Styled.CloseWrapper message={message}>
        <Styled.CloseIcon onClick={onClose}>
          <CrossOutline size={10.56} color={lightPalette[Color.TextSecondary]} />
        </Styled.CloseIcon>
      </Styled.CloseWrapper>
    </Styled.PopupContent>
  )
);

export const defaultProps = {
  ...popupStatusDefaultProps,
};

PopupContent.defaultProps = defaultProps;

export const propTypes = {
  ...popupStatusPropTypes,
  message: PT.node.isRequired,
  onClose: PT.func,
};

PopupContent.propTypes = propTypes;

export default PopupContent;
