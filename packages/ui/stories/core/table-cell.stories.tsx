import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Table from '../../src/core/table';
import TableHead from '../../src/core/table-head';
import TableCell, { TableCellProps } from '../../src/core/table-cell';
import TableRow from '../../src/core/table-row';

const meta: Meta<typeof TableCell> = {
  title: 'Surfaces/Table/TableCell',
  component: TableCell,
  excludeStories: ['Table', 'TableContainer', 'TableHead', 'TableCell', 'TableRow', 'TableBody'],
  argTypes: {
    children: {
      description: 'Node',
    },
    padding: {
      description: '` default options none` ',
      control: {
        type: 'radio',
        options: ['default', 'options', 'none'],
      },
    },
    size: {
      description: '` medium small` ',
      control: {
        type: 'radio',
        options: ['medium', 'small'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

const defaultArgs = {
  children: '',
};

const BasicTemplate = ({ ...args }: TableCellProps): JSX.Element => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell {...args}>Description</TableCell>
      </TableRow>
    </TableHead>
  </Table>
);

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
