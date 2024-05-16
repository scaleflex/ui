import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TabPanel, { TabPanelProps } from '../../src/core/tab-panel';

const meta: Meta<typeof TabPanel> = {
  title: 'DataDisplay/TabPanel',
  component: TabPanel,
  excludeStories: ['TabPanel'],

  argTypes: {
    value: {
      description: 'TabPanel is visible only when value is equal to index',
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

const BasicTemplate = ({ ...args }: TabPanelProps): JSX.Element => <TabPanel {...args} />;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
