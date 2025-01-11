import type { Meta, StoryObj } from '@storybook/react';

import TableHead from '../../src/core/table-head';
import TableHeadDocs from '../docs/table-head.mdx';

const meta: Meta<typeof TableHead> = {
  title: 'DataDisplay/Table/TableHead',
  component: TableHead,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TableHeadDocs,
      subtitle: 'Used with Table component.',
    },
  },
  argTypes: {
    children: {
      description: 'Content of the table head',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableHead>;

const defaultArgs = {
  children: '',
};

export const Primary: Story = {
  args: { ...defaultArgs },
};
