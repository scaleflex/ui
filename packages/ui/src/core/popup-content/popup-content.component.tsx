import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import PopupStatus from '../popup-status';
import CrossButton from '../cross-button/cross-button.component';
import type { PopupContentProps } from './popup-content.props';
import Styled from './popup-content.styles';
import { Status } from '../popup-status/types';

const PopupContent = intrinsicComponent<PopupContentProps, HTMLDivElement>(
  ({ onClose, message, status = Status.Success, popupStatusProps, ...rest }: PopupContentProps, ref): JSX.Element => (
    <Styled.PopupContent {...rest} ref={ref}>
      <Styled.PopupStatus status={status} message={message} {...popupStatusProps}>
        <PopupStatus status={status} />
      </Styled.PopupStatus>

      <Styled.LabelWrapper>
        <Styled.Label>{message}</Styled.Label>
      </Styled.LabelWrapper>

      <Styled.CloseWrapper>
        <CrossButton size="sm" onClick={onClose} />
      </Styled.CloseWrapper>
    </Styled.PopupContent>
  )
);

export default PopupContent;
