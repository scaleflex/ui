import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _Robot, { RobotProps } from '../../src/core/robot';
import { Status } from '../../src/core/robot/types';
import { StoryGroup } from './types';

export const Robot = _Robot;

export default {
  title: `${StoryGroup.DataDisplay}/Robot`,
  component: Robot,
  excludeStories: ['Robot'],
} as Meta;

const defaultArgs = {
  status: Status.Happy,
};

const BasicTemplate: Story<RobotProps> = ({ ...args }) => <Robot {...args} />;

// Happy
export const Happy = BasicTemplate.bind({});
Happy.args = { ...defaultArgs };

// Sad
export const Sad = BasicTemplate.bind({});
Sad.args = {
  ...defaultArgs,
  status: Status.Sad,
};

// Neutral
export const Neutral = BasicTemplate.bind({});
Neutral.args = {
  ...defaultArgs,
  status: Status.Neutral,
};

// Worried
export const Worried = BasicTemplate.bind({});
Worried.args = {
  ...defaultArgs,
  status: Status.Worried,
};
