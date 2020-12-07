import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _Dot, { DotProps } from '../src/dot';
import { StoryGroup } from './types';

export const Dot = _Dot;

export default {
  title: `${StoryGroup.DataDisplay}/Dot`,
  component: Dot,
  excludeStories: ['Dot'],
} as Meta;

const defaultArgs = {
  active: false,
};

const BasicTemplate: Story<DotProps> = (args) => (
  <Dot {...args} />
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
