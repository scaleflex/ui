import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _TagField, { TagFieldProps } from '../../src/core/tag-field';
import { StoryGroup } from './types';

export const TagField = _TagField;

export default {
  title: `${StoryGroup.Surfaces}/TagField`,
  component: TagField,
  excludeStories: ['TagField'],

  argTypes: {},
} as Meta;

const defaultArgs = {
  tags: ['scaleflex', 'sfx'],
  suggestedTags: ['scaleflex', 'scaleflexUi', 'scalefexIcons', 'web develompent', 'programming'],
};

const BasicTemplate: Story<TagFieldProps> = ({ ...args }) => {
  const [tags, setTags] = useState(args.tags);

  const addTags = (newTags: string[]): void => {
    setTags(newTags);
  };

  const removeTags = (newTags: string[]): void => {
    setTags(newTags);
  };

  return (
    <TagField
      {...args}
      tags={tags}
      suggestedTags={args.suggestedTags}
      onAdd={(newTags: string[]) => addTags(newTags)}
      onRemove={(newTags: string[]) => removeTags(newTags)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
