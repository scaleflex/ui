import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { StoryGroup } from './types';
import { Variant, Type, Size } from '../../src/core/status-label/types';
import _StatusLabel, { StatusLabelProps } from '../../src/core/status-label';

export const StatusLabel = _StatusLabel;

export default {
  title: `${StoryGroup.DataDisplay}/StatusLabel`,
  component: StatusLabel,
  excludeStories: ['StatusLabel'],
} as Meta;

const defaultArgs = {
  label: 'Label',
  variant: Variant.Filled,
  type: Type.Default,
  size: Size.Md,
  iconSize: 8,
};

const BasicTemplate: Story<StatusLabelProps> = ({ ...args }) => <StatusLabel {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
