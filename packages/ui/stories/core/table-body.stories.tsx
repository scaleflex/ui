import type { Meta, StoryObj } from '@storybook/react';

import TableBody from '../../src/core/table-body';
import TableBodyDocs from '../docs/table-body.mdx';

const meta: Meta<typeof TableBody> = {
  title: 'DataDisplay/Table/TableBody',
  component: TableBody,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TableBodyDocs,
      subtitle: 'Used with Table component.',
    },
  },
  argTypes: {
    children: {
      description: 'Content of the table body',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableBody>;

const defaultArgs = {
  children: '',
};

export const Primary: Story = {
  args: { ...defaultArgs },
};
