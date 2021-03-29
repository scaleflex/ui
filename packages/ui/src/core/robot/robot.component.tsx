import React from 'react';
import PT from 'prop-types';
import RobotWorried from '@scaleflex/icons/robot-worried';
import RobotSad from '@scaleflex/icons/robot-sad';
import RobotNeutral from '@scaleflex/icons/robot-neutral';
import RobotHappy from '@scaleflex/icons/robot-happy';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { RobotProps, RobotStatusType } from './robot.props';
import { Status } from './types';
import Styled from './robot.styles';

const getRobotIcon = (status?: RobotStatusType): JSX.Element => {
  switch (status) {
    case Status.Worried:
      return <RobotWorried />;

    case Status.Sad:
      return <RobotSad />;

    case Status.Neutral:
      return <RobotNeutral />;

    case Status.Happy:
    default:
      return <RobotHappy />;
  }
};

const Robot = intrinsicComponent<RobotProps, HTMLSpanElement>(
  ({ status, ...rest }, ref): JSX.Element => (
    <Styled.Robot {...rest} ref={ref}>
      {getRobotIcon(status)}
    </Styled.Robot>
  )
);

export const defaultProps = {
  status: Status.Happy,
};

Robot.defaultProps = defaultProps;

export const propTypes = {
  status: PT.oneOf(objectValues(Status)),
};

Robot.propTypes = propTypes;

export default Robot;
