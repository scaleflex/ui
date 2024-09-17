import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TableBody, { TableBodyProps } from '../../src/core/table-body';
import TableStory from '../shared/table-story.component';

const meta: Meta<typeof TableBody> = {
  title: 'DataDisplay/Table/TableBody',
  component: TableBody,
  excludeStories: ['Table', 'TableContainer', 'TableHead', 'TableCell', 'TableRow', 'TableBody'],
  argTypes: {
    children: {
      description: 'Node',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableBody>;

const defaultArgs = {
  children: '',
};

const BasicTemplate = ({ ...args }: TableBodyProps): JSX.Element => <TableStory {...args} />;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
