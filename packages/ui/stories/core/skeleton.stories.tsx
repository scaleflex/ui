import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Skeleton, { SkeletonProps } from '../../src/core/skeleton';
import SkeletonDocsTemplate from '../docs/skeleton.mdx';

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: SkeletonDocsTemplate,
      subtitle: 'Skeletons are used to indicate that a component is loading.',
    },
  },
  argTypes: {
    width: {
      description: 'The width of the skeleton.',
    },
    height: {
      description: 'The height of the skeleton.',
    },
  },
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
