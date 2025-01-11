import type { Meta, StoryObj } from '@storybook/react';

import TableContainer from '../../src/core/table-container';
import TableContainerDocs from '../docs/table-container.mdx';

const meta: Meta<typeof TableContainer> = {
  title: 'DataDisplay/Table/TableContainer',
  component: TableContainer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TableContainerDocs,
      subtitle: 'Used with Table component.',
    },
  },
  argTypes: {
    children: {
      description: 'Content of the table container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableContainer>;

const defaultArgs = {
  children: '',
};

export const Primary: Story = {
  args: { ...defaultArgs },
};
