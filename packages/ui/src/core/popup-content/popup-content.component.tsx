import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import PopupStatus from '../popup-status';
import CrossButton from '../cross-button/cross-button.component';
import {
  defaultProps as popupStatusDefaultProps,
  propTypes as popupStatusPropTypes,
} from '../popup-status/popup-status.component';
import type { PopupContentProps } from './popup-content.props';
import Styled from './popup-content.styles';

const PopupContent = intrinsicComponent<PopupContentProps, HTMLDivElement>(
  ({ onClose, message, status, ...rest }, ref): JSX.Element => (
    <Styled.PopupContent {...rest} ref={ref}>
      <Styled.PopupStatus status={status} message={message} {...rest}>
        <PopupStatus status={status} />
      </Styled.PopupStatus>

      <Styled.LabelWrapper>
        <Styled.Label>{message}</Styled.Label>
      </Styled.LabelWrapper>

      <Styled.CloseWrapper>
        <CrossButton size='sm' onClose={onClose} />
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
