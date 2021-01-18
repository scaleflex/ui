import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Tabs, { TabsProps } from '../../src/core/tabs';
import Tab from '../../src/core/tab';
import TabPanel from '../../src/core/tab-panel';
import { StoryGroup } from './types';

export const Tabs = _Tabs;

export default {
  title: `${StoryGroup.Navigation}/Tabs`,
  component: Tabs,
  excludeStories: ['Tabs'],

  argTypes: {
    children: {
      description: 'Tabs contents, normally `Tab`s.',
    }
  }
} as Meta;

const defaultArgs = {
};

const BasicTemplate: Story<TabsProps> = ({
  ...args
}) => {
  const tabs = ['Assets', 'Collections', 'Products'];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabClick = (newValue: any): void => setActiveTabIndex(newValue);

  return (
    <div>
      <Tabs value={activeTabIndex} onChange={handleTabClick} {...args}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            value={index}
            label={tab}
          />
        ))}
      </Tabs>

      {tabs.map((tab, index) => (
        <TabPanel
          key={tab}
          value={activeTabIndex}
          index={index}
        >
          {tab}
        </TabPanel>
      ))}
    </div>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
