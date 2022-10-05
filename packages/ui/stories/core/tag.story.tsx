import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _Tag, { TagProps } from '../../src/core/tag';
import { StoryGroup } from './types';

export const Tag = _Tag;

export default {
  title: `${StoryGroup.Inputs}/Tag`,
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
} as Meta;

const defaultArgs = {
  children: 'Cheerful woman',
  crossIcon: false,
};

const BasicTemplate: Story<TagProps> = ({ ...args }) => (
  <Tag {...args} onSelect={() => alert('onSelect handler')} onRemove={() => alert('onRemove handler')} />
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
