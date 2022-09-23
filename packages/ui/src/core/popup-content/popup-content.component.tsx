import React from 'react';
import PT from 'prop-types';
import { Color } from '@scaleflex/ui/utils/types/palette';
import { lightPalette } from '@scaleflex/ui/theme/roots/palette';
import Cross from '@scaleflex/icons/cross';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import PopupStatus from '../popup-status';
import {
  defaultProps as popupStatusDefaultProps,
  propTypes as popupStatusPropTypes,
} from '../popup-status/popup-status.component';
import type { PopupContentProps } from './popup-content.props';
import Styled from './popup-content.styles';
import { Status } from '../popup-status/types';

const PopupContent = intrinsicComponent<PopupContentProps, HTMLDivElement>(
  ({ onClose, message, status, ...rest }, ref): JSX.Element => (
    <Styled.PopupContent message={message} {...rest} ref={ref}>
      <Styled.PopupStatus status={status} message={message} {...rest}>
        <PopupStatus status={status} />
      </Styled.PopupStatus>

      <Styled.LabelWrapper>
        <Styled.Label>{message}</Styled.Label>
      </Styled.LabelWrapper>

      <Styled.CloseWrapper>
        <Styled.CloseIcon onClick={onClose}>
          <Cross size={10.56} color={lightPalette[Color.TextSecondary]} />
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
  status: PT.oneOf(objectValues(Status)),
};

PopupContent.propTypes = propTypes;

export default PopupContent;
