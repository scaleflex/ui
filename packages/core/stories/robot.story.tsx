import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _Robot, { RobotProps } from '../src/robot';
import { Emotion } from '../src/robot/types';

export const Robot = _Robot;

export default {
  title: 'Data Display/Robot',
  component: Robot,
  excludeStories: ['Robot'],
} as Meta;

const defaultArgs = {
  emotion: Emotion.Happy,
};

const BasicTemplate: Story<RobotProps> = ({
  ...args
}) => (
  <Robot {...args} />
);

// Happy
export const Happy = BasicTemplate.bind({});
Happy.args = { ...defaultArgs };

// Sad
export const Sad = BasicTemplate.bind({});
Sad.args = {
  ...defaultArgs,
  emotion: Emotion.Sad,
};

// Neutral
export const Neutral = BasicTemplate.bind({});
Neutral.args = {
  ...defaultArgs,
  emotion: Emotion.Neutral,
};

// Worried
export const Worried = BasicTemplate.bind({});
Worried.args = {
  ...defaultArgs,
  emotion: Emotion.Worried,
};
