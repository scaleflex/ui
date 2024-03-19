import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Table from '../../src/core/table';
import TableHead from '../../src/core/table-head';
import TableCell from '../../src/core/table-cell';
import TableRow, { TableRowProps } from '../../src/core/table-row';

const meta: Meta<typeof TableRow> = {
  title: 'Surfaces/Table/TableRow',
  component: TableRow,
  excludeStories: ['Table', 'TableContainer', 'TableHead', 'TableCell', 'TableRow', 'TableBody'],

  argTypes: {
    children: {
      description: 'Node',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

const defaultArgs = {
  children: '',
};

const BasicTemplate = ({ ...args }: TableRowProps): JSX.Element => (
  <Table>
    <TableHead>
      <TableRow {...args}>
        <TableCell>Description</TableCell>
      </TableRow>
    </TableHead>
  </Table>
);

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
