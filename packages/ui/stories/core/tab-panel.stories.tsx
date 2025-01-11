import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TabPanel from '../../src/core/tab-panel';
import TabPanelDocsTemplate from '../docs/tab-panel.mdx';

const meta: Meta<typeof TabPanel> = {
  title: 'Navigation/Tabs/TabPanel',
  component: TabPanel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TabPanelDocsTemplate,
      subtitle:
        'TabPanel is a component that displays the content of a tab, it is used with `Tab` and `Tabs` components.',
    },
  },
  argTypes: {
    value: {
      description: 'TabPanel is visible only when value is equal to index',
    },
    index: {
      description: 'The index of the tab panel.',
    },
    children: {
      description: 'The content of the tab panel.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabPanel>;

const defaultArgs = {
  children: 'Asset tab content',
  value: 1,
  index: 1,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <TabPanel {...args} />,
};
