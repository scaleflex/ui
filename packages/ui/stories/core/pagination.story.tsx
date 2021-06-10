import React from 'react';
import type { Meta, Story } from '@storybook/react';

import _Pagination, { PaginationProps } from '../../src/core/pagination';

import { StoryGroup } from './types';

export const Pagination = _Pagination;

export default {
  title: `${StoryGroup.Surfaces}/Pagination`,
  component: Pagination,
  excludeStories: ['Pagination'],
} as Meta;

const defaultArgs = {
  count: 10,
  defaultPage: 1,
  boundaryCount: 1,
};

const BasicTemplate: Story<PaginationProps> = ({ ...args }) => {
  return (
    <div>
      <Pagination {...args} />
    </div>
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
