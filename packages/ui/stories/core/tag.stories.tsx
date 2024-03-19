import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Tag, { TagProps } from '../../src/core/tag';

const meta: Meta<typeof Tag> = {
  title: 'Inputs/Tag',
  component: Tag,
  excludeStories: ['Tag'],
  argTypes: {
    onSelect: {
      description: 'Actual only for "suggested" type.',
    },
    onRemove: {
      description: 'On remove icon click.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

const defaultArgs = {
  children: 'Cheerful woman',
  crossIcon: false,
};

const BasicTemplate = ({ ...args }: TagProps): JSX.Element => (
  <Tag {...args} onSelect={() => alert('onSelect handler')} onRemove={() => alert('onRemove handler')} />
);

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
