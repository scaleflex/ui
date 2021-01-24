import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _TabPanel, { TabPanelProps } from '../../src/core/tab-panel';
import { StoryGroup } from './types';

export const TabPanel = _TabPanel;

export default {
  title: `${StoryGroup.DataDisplay}/TabPanel`,
  component: TabPanel,
  excludeStories: ['TabPanel'],

  argTypes: {
    value: {
      description: 'TabPanel is visible only when value is equal to index'
    }
  }
} as Meta;

const defaultArgs = {
  children: 'Asset tab content',
  value: 1,
  index: 1,
};

const BasicTemplate: Story<TabPanelProps> = ({
  ...args
}) => (
  <TabPanel {...args} />
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
