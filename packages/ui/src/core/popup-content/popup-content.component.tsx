import React from 'react';

import PopupStatus from '../popup-status';
import CrossButton from '../cross-button/cross-button.component';
import type { PopupContentProps } from './popup-content.props';
import Styled from './popup-content.styles';
import { Status } from '../popup-status/types';

const PopupContent = ({
  onClose,
  message,
  status = Status.Success,
  popupStatusProps,
  ref,
  ...rest
}: PopupContentProps): JSX.Element => (
  <Styled.PopupContent {...rest} ref={ref}>
    <Styled.PopupStatus $status={status}>
      <PopupStatus status={status} {...popupStatusProps} />
    </Styled.PopupStatus>

    <Styled.LabelWrapper>
      <Styled.Label>{message}</Styled.Label>
    </Styled.LabelWrapper>

    <Styled.CloseWrapper>
      <CrossButton size="sm" onClick={onClose} />
    </Styled.CloseWrapper>
  </Styled.PopupContent>
);

export default PopupContent;
