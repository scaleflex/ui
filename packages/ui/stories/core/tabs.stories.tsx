import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AssetsIcon from '@scaleflex/icons/assets';
import CollectionsIcon from '@scaleflex/icons/collections';
import ProductsIcon from '@scaleflex/icons/products';

import Tabs from '../../src/core/tabs';
import Tab from '../../src/core/tab';
import TabPanel from '../../src/core/tab-panel';
import TabsDocsTemplate from '../docs/tabs.mdx';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TabsDocsTemplate,
      subtitle: 'Tabs make it easy to explore and switch between different views.',
    },
  },
  argTypes: {
    children: {
      description: 'Tabs contents, you should use `Tab` component.',
    },
    value: {
      description: 'The value of the active tab.',
    },
    onChange: {
      description: 'Callback function that is called when the tab is changed.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  render: (args) => {
    const tabs = ['Assets', 'Collections', 'Products'];
    const tabsIcons = [<AssetsIcon />, <CollectionsIcon />, <ProductsIcon />];
    const [activeTabIndex, setActiveTabIndex] = useState<string | number>(0);
    const handleTabClick = (newValue: string | number): void => setActiveTabIndex(newValue);

    return (
      <div>
        <Tabs value={activeTabIndex} onChange={handleTabClick} {...args}>
          {tabs.map((tab, index) => (
            <Tab key={tab} value={index} label={tab} icon={tabsIcons[index]} />
          ))}
        </Tabs>

        {tabs.map((tab, index) => (
          <TabPanel key={tab} value={activeTabIndex} index={index}>
            {tab}
          </TabPanel>
        ))}
      </div>
    );
  },
};
