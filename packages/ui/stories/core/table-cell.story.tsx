import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { StoryGroup } from './types';

import _Table from '../../src/core/table';
import _TableContainer from '../../src/core/table-container';
import _TableHead from '../../src/core/table-head';
import _TableCell, { TableCellProps } from '../../src/core/table-cell';
import _TableRow from '../../src/core/table-row';
import _TableBody from '../../src/core/table-body';

export const Table = _Table;
export const TableContainer = _TableContainer;
export const TableHead = _TableHead;
export const TableCell = _TableCell;
export const TableRow = _TableRow;
export const TableBody = _TableBody;

export default {
  // title: `${StoryGroup.Surfaces}/Table/TableCell`,
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
} as Meta;

const defaultArgs = {
  children: '',
};

const BasicTemplate: Story<TableCellProps> = ({ ...args }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell {...args}>Description</TableCell>
      </TableRow>
    </TableHead>
  </Table>
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
