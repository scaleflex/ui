import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AssetsIcon from '@scaleflex/icons/assets';
import DownloadCart from '@scaleflex/icons/download-cart';

import Tab, { TabProps } from '../../src/core/tab';
import { Size } from '../../src/core/tab/types';

const meta: Meta<typeof Tab> = {
  title: 'Navigation/Tabs/Tab',
  component: Tab,
  excludeStories: ['Tab'],
};

export default meta;
type Story = StoryObj<typeof Tab>;

const defaultArgs = {
  label: 'Home',
  size: Size.Md,
  disabled: false,
  active: false,
};

const BasicTemplate = ({ ...args }: TabProps): JSX.Element => <Tab {...args} />;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIcon: Story = {
  args: { ...defaultArgs, label: 'Assets', icon: <AssetsIcon /> },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithBadge: Story = {
  args: { ...defaultArgs, label: 'Download Cart', icon: <DownloadCart />, badge: '(2)', notification: '#3ECF8B' },
  render: (args) => <BasicTemplate {...args} />,
};
