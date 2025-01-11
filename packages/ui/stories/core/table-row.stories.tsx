import type { Meta, StoryObj } from '@storybook/react';

import TableRow from '../../src/core/table-row';
import TableRowDocs from '../docs/table-row.mdx';

const meta: Meta<typeof TableRow> = {
  title: 'DataDisplay/Table/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TableRowDocs,
      subtitle: 'Used with Table component.',
    },
  },
  argTypes: {
    children: {
      description: 'The content of the table row',
    },
    hover: {
      description: 'if true, the table row will have a hover effect',
    },
    selected: {
      description: 'if true, the table row will have a selected effect',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

const defaultArgs = {
  children: '',
};

export const Primary: Story = {
  args: { ...defaultArgs },
};
