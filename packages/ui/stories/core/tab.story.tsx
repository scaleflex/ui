import React from 'react';
import type { Meta, Story } from '@storybook/react';
import AssetsIcon from '@scaleflex/icons/assets';
import _Tab, { TabProps } from '../../src/core/tab';
import { Size } from '../../src/core/tab/types';
import { StoryGroup } from './types';

export const Tab = _Tab;

export default {
  title: `${StoryGroup.DataDisplay}/Tab`,
  component: Tab,
  excludeStories: ['Tab'],
} as Meta;

const defaultArgs = {
  label: 'Assets',
  icon: <AssetsIcon />,
  size: Size.Md,
};

const BasicTemplate: Story<TabProps> = ({
  ...args
}) => (
  <Tab {...args} />
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// Active
export const Active = BasicTemplate.bind({});
Active.args = {
  ...defaultArgs,
  active: true,
};
