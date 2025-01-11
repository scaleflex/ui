import type { Meta, StoryObj } from '@storybook/react';

import TablePagination from '../../src/core/table-pagination';
import TablePaginationDocs from '../docs/table-pagination.mdx';

const meta: Meta<typeof TablePagination> = {
  title: 'DataDisplay/Table/TablePagination',
  component: TablePagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TablePaginationDocs,
      subtitle: 'Used with Table component.',
    },
  },
  argTypes: {
    children: {
      description: 'Content of the table pagination',
    },
    count: {
      description: 'The total number of items in the table',
    },
    page: {
      description: 'The current page number',
    },
    rowsPerPage: {
      description: 'The number of rows per page',
    },
    rowsPerPageOptions: {
      description: 'The options for the number of rows per page',
    },
    onPageChange: {
      description: 'Callback function fired when the page is changed',
    },
    onRowsPerPageChange: {
      description: 'Callback function fired when the rows per page is changed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TablePagination>;

const defaultArgs = {
  children: '',
};

export const Primary: Story = {
  args: { ...defaultArgs },
};
