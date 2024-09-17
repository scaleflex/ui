import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TableHead, { TableHeadProps } from '../../src/core/table-head';
import TableStory from '../shared/table-story.component';

const meta: Meta<typeof TableHead> = {
  title: 'DataDisplay/Table/TableHead',
  component: TableHead,
  excludeStories: ['Table', 'TableContainer', 'TableHead', 'TableCell', 'TableRow', 'TableBody'],
  argTypes: {
    children: {
      description: 'Node',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableHead>;

const defaultArgs = {
  children: '',
};

const BasicTemplate = ({ ...args }: TableHeadProps): JSX.Element => <TableStory {...args} />;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
