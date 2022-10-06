import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { StoryGroup } from './types';
import _StatusLabel, { StatusLabelProps } from '../../src/core/status-label';

export const StatusLabel = _StatusLabel;

export default {
  title: `${StoryGroup.DataDisplay}/StatusLabel`,
  component: StatusLabel,
  excludeStories: ['StatusLabel'],
} as Meta;

const defaultArgs = {
  label: 'Label',
  gridView: false,
  listView: false,
};

const BasicTemplate: Story<StatusLabelProps> = ({ ...args }) => <StatusLabel {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
