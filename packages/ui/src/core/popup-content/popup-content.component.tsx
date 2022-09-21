import React from 'react';
import PT from 'prop-types';

import Cross from '@scaleflex/icons/cross-outline';
import { intrinsicComponent } from '../../utils/functions';
import Robot from '../robot';
import { defaultProps as robotDefaultProps, propTypes as robotPropTypes } from '../robot/robot.component';
import type { PopupContentProps } from './popup-content.props';
import Styled from './popup-content.styles';
import { Status } from '../robot/types';
import { RobotStatusType } from '../robot/robot.props';

const getIconBackgroundColor = (status?: RobotStatusType): string => {
  switch (status) {
    case Status.Warning:
      return '#FFF9F2';

    case Status.Error:
      return '#FDF4F2';

    case Status.Info:
      return '#F4F9FF';

    case Status.Success:
    default:
      return '#EDFAF4';
  }
};

const PopupContent = intrinsicComponent<PopupContentProps, HTMLDivElement>(
  ({ onClose, message, status, ...rest }, ref): JSX.Element => (
    <Styled.PopupContent {...rest} ref={ref}>
      <Styled.Robot style={{ backgroundColor: getIconBackgroundColor(status) }}>
        <Robot status={status} />
      </Styled.Robot>

      <Styled.LabelWrapper>
        <Styled.Label>{message}</Styled.Label>
      </Styled.LabelWrapper>

      <Styled.CloseWrapper>
        <Styled.CloseIcon onClick={onClose}>
          <Cross size={17.5} color="#768A9F" />
        </Styled.CloseIcon>
      </Styled.CloseWrapper>
    </Styled.PopupContent>
  )
);

export const defaultProps = {
  ...robotDefaultProps,
};

PopupContent.defaultProps = defaultProps;

export const propTypes = {
  ...robotPropTypes,
  message: PT.node.isRequired,
  onClose: PT.func,
};

PopupContent.propTypes = propTypes;

export default PopupContent;
