import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TableCell from '../../src/core/table-cell';
import Table from '../../src/core/table';
import TableHead from '../../src/core/table-head';
import TableRow from '../../src/core/table-row';
import TableCellDocs from '../docs/table-cell.mdx';
import { Align, Padding, Size } from '../../src/core/table-cell/types';

const meta: Meta<typeof TableCell> = {
  title: 'DataDisplay/Table/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TableCellDocs,
      subtitle: 'Used with Table component.',
    },
  },
  argTypes: {
    children: {
      description: 'Content of the table cell',
    },
    padding: {
      description: 'Padding of the table cell, `default`, `options` or `none`',
      options: Object.values(Padding),
      control: {
        type: 'select',
      },
    },
    size: {
      description: 'Size of the table cell, `medium` or `small`',
      options: Object.values(Size),
      control: {
        type: 'select',
      },
    },
    align: {
      description: 'Alignment of the table cell, `left`, `center`, `right` or `justify`',
      options: Object.values(Align),
      control: {
        type: 'select',
      },
    },
    component: {
      description: 'Element type of the table cell, `th` or `td`, defaults to `td`',
    },
    scope: {
      description: 'Scope of the table cell, `row` or `col`, defaults to `col`',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

const defaultArgs = {
  children: '',
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell {...args}>Description</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  ),
};
