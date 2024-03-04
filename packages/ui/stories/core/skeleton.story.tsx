import React from 'react';
import type { Meta, Story } from '@storybook/react';

import _Skeleton, { SkeletonProps } from '../../src/core/skeleton';
// import { Type } from '../../src/core/skeleton/types';
import { StoryGroup } from './types';

export const Skeleton = _Skeleton;

export default {
  // title: `${StoryGroup.Feedback}/Skeleton`,
  component: Skeleton,
  excludeStories: ['Skeleton'],
} as Meta;

const defaultArgs = {
  width: 400,
  height: 50,
};

const BasicTemplate: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
