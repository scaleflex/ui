import React from 'react';
import type { Meta, Story } from '@storybook/react';
import AssetsIcon from '@scaleflex/icons/assets';
import DownloadCart from '@scaleflex/icons/download-cart';
import _Tab, { TabProps } from '../../src/core/tab';
import { Size } from '../../src/core/tab/types';
import { StoryGroup } from './types';

export const Tab = _Tab;

export default {
  title: `${StoryGroup.Navigation}/Tabs/Tab`,
  component: Tab,
  excludeStories: ['Tab'],
} as Meta;

const defaultArgs = {
  label: 'Home',
  size: Size.Md,
  disabled: false,
  active: false,
};

const BasicTemplate: Story<TabProps> = ({ ...args }) => <Tab {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// With Icon
export const WithIcon = BasicTemplate.bind({});
WithIcon.args = {
  ...defaultArgs,
  label: 'Assets',
  icon: <AssetsIcon />,
};

// With Badge
export const WithBadge = BasicTemplate.bind({});
WithBadge.args = {
  ...defaultArgs,
  label: 'Download Cart',
  icon: <DownloadCart />,
  badge: '(2)',
  notification: '#3ECF8B',
};
