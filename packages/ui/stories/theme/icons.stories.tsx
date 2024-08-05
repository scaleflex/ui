import React from 'react';
import { About } from '@scaleflex/icons';
import { StoryObj } from '@storybook/react';

import IconDocsTemplate from '../docs/icons.mdx';

const meta = {
  title: 'Theme/Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: '400+ ready-to-use Icons.',
      page: IconDocsTemplate,
    },
  },
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
      description: 'Icon color',
    },
    size: {
      control: {
        type: 'number',
      },
      description: 'Icon size',
    },
  },
  args: {
    color: '#5D6D7E',
    size: 25,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <About {...args} />,
};
