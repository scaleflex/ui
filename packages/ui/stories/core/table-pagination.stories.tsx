import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TablePagination, { TablePaginationProps } from '../../src/core/table-pagination';
import TableStory from '../shared/table-story.component';

const meta: Meta<typeof TablePagination> = {
  title: 'DataDisplay/Table/TablePagination',
  component: TablePagination,
  excludeStories: ['Table', 'TableContainer', 'TableHead', 'TableCell', 'TableRow', 'TableBody', 'TablePagination'],

  argTypes: {
    children: {
      description: 'Node',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TablePagination>;

const defaultArgs = {
  children: '',
};

const BasicTemplate = ({ ...args }: TablePaginationProps): JSX.Element => <TableStory {...args} />;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
