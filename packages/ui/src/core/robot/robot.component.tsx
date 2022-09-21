import React from 'react';
import PT from 'prop-types';

import { Success, About, Error, Warning } from '@scaleflex/icons';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { RobotProps, RobotStatusType } from './robot.props';
import { Status } from './types';
import Styled from './robot.styles';

const getRobotIcon = (status?: RobotStatusType): JSX.Element => {
  switch (status) {
    case Status.Warning:
      return <Warning color="#FFAC4A" size={20} />;

    case Status.Error:
      return <Error color="#E85B46" size={20} />;

    case Status.Info:
      return <About color="#297FB8" size={20} />;

    case Status.Success:
    default:
      return <Success color="#3ECF8B" />;
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
  status: Status.Success,
};

Robot.defaultProps = defaultProps;

export const propTypes = {
  status: PT.oneOf(objectValues(Status)),
};

Robot.propTypes = propTypes;

export default Robot;
