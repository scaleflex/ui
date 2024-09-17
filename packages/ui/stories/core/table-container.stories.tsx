import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TableContainer, { TableContainerProps } from '../../src/core/table-container';
import TableStory from '../shared/table-story.component';

const meta: Meta<typeof TableContainer> = {
  title: 'DataDisplay/Table/TableContainer',
  component: TableContainer,
  excludeStories: ['Table', 'TableContainer', 'TableHead', 'TableCell', 'TableRow', 'TableBody'],
  argTypes: {
    children: {
      description: 'Node',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableContainer>;

const defaultArgs = {
  children: '',
};

const BasicTemplate = ({ ...args }: TableContainerProps): JSX.Element => <TableStory {...args} />;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
