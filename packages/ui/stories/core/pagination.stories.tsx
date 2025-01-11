import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Pagination, { PaginationProps } from '../../src/core/pagination';
import PaginationDocsTemplate from '../docs/pagination.mdx';

const meta: Meta<PaginationProps> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: PaginationDocsTemplate,
      subtitle: 'The Pagination component enables the user to select a specific page from a range of pages.',
    },
  },
  argTypes: {
    count: {
      description: 'The total number of pages',
    },
    defaultPage: {
      description: 'The default page number selected when the component is mounted.',
    },
    boundaryCount: {
      description: 'Number of always visible pages at the beginning and end.',
    },
    disabled: {
      description: 'If true, the component is disabled.',
    },
    getItemAriaLabel: {
      description: 'Callback function fired to determine the `aria-label` of each pagination item.',
    },
    onChange: {
      description: 'Callback function fired when the page is changed.',
    },
    page: {
      description: 'The current page number.',
    },
    siblingCount: {
      description: 'Number of always visible pages before and after the current page.',
    },
  },
};

export default meta;
type Story = StoryObj<PaginationProps>;

const defaultArgs = {
  count: 10,
  defaultPage: 1,
  boundaryCount: 1,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args: PaginationProps) => <Pagination {...args} />,
};
