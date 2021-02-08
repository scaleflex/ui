import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { StoryGroup } from './types';
import _Table from '../../src/core/table';
import _TableContainer, { TableContainerProps } from '../../src/core/table-container';
import _TableHead from '../../src/core/table-head';
import _TableCell from '../../src/core/table-cell';
import _TableRow from '../../src/core/table-row';
import _TableBody from '../../src/core/table-body';
import TableStory from '../shared/table-story.component'


export const Table = _Table;
export const TableContainer = _TableContainer;
export const TableHead = _TableHead;
export const TableCell = _TableCell;
export const TableRow = _TableRow;
export const TableBody = _TableBody;

export default {
  title: `${StoryGroup.Surfaces}/Table/TableContainer`,
  component: TableContainer,
  excludeStories: ['Table', 'TableContainer', 'TableHead', 'TableCell', 'TableRow', 'TableBody'],

  argTypes: {
    children: {
      description: 'Node',
    }
  }
} as Meta;

const defaultArgs = {
  children: ''
};

const BasicTemplate: Story<TableContainerProps> = ({
  ...args
}) => (
  <TableStory />
)


// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };


