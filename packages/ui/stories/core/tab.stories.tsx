import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DownloadCart from '@scaleflex/icons/download-cart';

import Tab from '../../src/core/tab';
import { Size } from '../../src/core/tab/types';
import TabDocsTemplate from '../docs/tab.mdx';

const meta: Meta<typeof Tab> = {
  title: 'Navigation/Tabs/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TabDocsTemplate,
      subtitle: 'Tab is a component that used with `Tabs` component to display a tab.',
    },
  },
  argTypes: {
    label: {
      description: 'The content of the tab.',
    },
    icon: {
      description: 'An icon that is shown before the label.',
    },
    badge: {
      description: 'A badge that is shown after the label.',
    },
    disabled: {
      description: 'if true, the tab is disabled.',
    },
    active: {
      description: 'if true, the tab is active.',
    },
    notification: {
      description: 'if it has value, a notification dot is shown on the icon and the color is the value.',
    },
    size: {
      description: 'The size of the tab. `sm`, `md`, `lg`',
      options: Object.values(Size),
      control: {
        type: 'select',
      },
    },
    value: {
      description: 'The value of the tab.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

const defaultArgs = {
  label: 'Home',
  size: Size.Md,
  disabled: false,
  active: false,
};

export const Primary: Story = {
  args: { ...defaultArgs, label: 'Download Cart', icon: <DownloadCart />, badge: '(2)', notification: '#3ECF8B' },
  render: (args) => <Tab {...args} />,
};
