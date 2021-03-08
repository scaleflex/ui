import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { StoryGroup } from './types';
import _Table from '../../src/core/table';
import _TableContainer from '../../src/core/table-container';
import _TableHead from '../../src/core/table-head';
import _TableCell from '../../src/core/table-cell';
import _TableRow, { TableRowProps } from '../../src/core/table-row';
import _TableBody from '../../src/core/table-body';

export const Table = _Table;
export const TableContainer = _TableContainer;
export const TableHead = _TableHead;
export const TableCell = _TableCell;
export const TableRow = _TableRow;
export const TableBody = _TableBody;

export default {
  title: `${StoryGroup.Surfaces}/Table/TableRow`,
  component: TableRow,
  excludeStories: ['Table', 'TableContainer', 'TableHead', 'TableCell', 'TableRow', 'TableBody'],

  argTypes: {
    children: {
      description: 'Node',
    },
  },
} as Meta;

const defaultArgs = {
  children: '',
};

const BasicTemplate: Story<TableRowProps> = ({ ...args }) => (
  <Table>
    <TableHead>
      <TableRow {...args}>
        <TableCell>Description</TableCell>
      </TableRow>
    </TableHead>
  </Table>
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
