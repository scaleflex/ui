import React from 'react';
import type { Meta, Story } from '@storybook/react';

import _ArrowTick, { ArrowTickProps } from '../../src/core/arrow-tick';
import { Position } from '../../src/utils/types';
import { StoryGroup } from './types';

export const ArrowTick = _ArrowTick;

export default {
  // title: `${StoryGroup.DataDisplay}/ArrowTick`,
  component: ArrowTick,
  excludeStories: ['ArrowTick'],
} as Meta;

const defaultArgs = {
  type: Position.Right,
};

const BasicTemplate: Story<ArrowTickProps> = (args) => <ArrowTick {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
