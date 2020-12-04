import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import RobotWorried from '@sfx-ui/icons/robot-worried';
import RobotSad from '@sfx-ui/icons/robot-sad';
import RobotNeutral from '@sfx-ui/icons/robot-neutral';
import RobotHappy from '@sfx-ui/icons/robot-happy';
import type { RobotProps, RobotPropsEmotion } from './robot.props';
import { Emotion } from './types';
import Styled from './robot.styles';

const getRobotIcon = (emotion: RobotPropsEmotion | undefined): JSX.Element => {
  switch (emotion) {
    case Emotion.Worried: return <RobotWorried />;

    case Emotion.Sad: return <RobotSad />;

    case Emotion.Neutral: return <RobotNeutral />;

    case Emotion.Happy:
    default:
      return <RobotHappy />;
  }
};

const Robot = intrinsicComponent<RobotProps, HTMLSpanElement>((
  { emotion, ...rest },
  ref
): JSX.Element => (
  <Styled.Robot {...rest} ref={ref}>
    {getRobotIcon(emotion)}
  </Styled.Robot>
));

Robot.defaultProps = {
  emotion: Emotion.Happy
};


Robot.propTypes = {
  emotion: PT.oneOf(objectValues(Emotion)),
};

export default Robot;
