import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _Tag, { TagProps } from '../src/tag';
import { StoryGroup } from './types';

export const Tag = _Tag;

export default {
  title: `${StoryGroup.Inputs}/Tag`,
  component: Tag,
  excludeStories: ['Tag'],
} as Meta;

const defaultArgs = {
  children: 'Audi Q7'
};

const BasicTemplate: Story<TagProps> = ({
  ...args
}) => (
  <Tag {...args} />
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
