import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Skeleton, { SkeletonProps } from '../../src/core/skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  excludeStories: ['Skeleton'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

const defaultArgs = {
  width: 400,
  height: 50,
};

const BasicTemplate = (args: SkeletonProps): JSX.Element => <Skeleton {...args} />;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
