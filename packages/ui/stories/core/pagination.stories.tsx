import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Pagination, { PaginationProps } from '../../src/core/pagination';

const meta: Meta<PaginationProps> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  excludeStories: ['Pagination'],
};

export default meta;
type Story = StoryObj<PaginationProps>;

const defaultArgs = {
  count: 10,
  defaultPage: 1,
  boundaryCount: 1,
};

const BasicTemplate = ({ ...args }): JSX.Element => {
  return (
    <div>
      <Pagination {...args} />
    </div>
  );
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args: PaginationProps) => <BasicTemplate {...args} />,
};
