import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import _TagField, { TagFieldProps, TagObjectTypes } from '../../src/core/tag-field';
import { StoryGroup } from './types';

export const TagField = _TagField;

export default {
  title: `${StoryGroup.Surfaces}/TagField`,
  component: TagField,
  excludeStories: ['TagField'],

  argTypes: {},
} as Meta;

const defaultArgs = {
  tags: [
    { id: 'scaleflex', label: 'scaleflex' },
    { id: 'sfx', label: 'sfx' },
    // 'scaleflex',
    // 'sfx',
  ],
  suggestedTags: ['scaleflex', 'scaleflexUi', 'scalefexIcons', 'web develompent', 'programming'],
  placeholder: 'Add a tag (separate by pressing enter)',
  label: 'Tags',
  hint: 'Some hint goes here',
};

const BasicTemplate: Story<TagFieldProps> = ({ ...args }) => {
  const [tags, setTags] = useState(args.tags);

  useEffect(() => {
    setTags(args.tags);
  }, [args.tags]);

  const addTags = (newTags: (string | TagObjectTypes)[]): void => {
    setTags(newTags);
  };

  const removeTags = (newTags: (string | TagObjectTypes)[]): void => {
    setTags(newTags);
  };

  return (
    <TagField
      {...args}
      tags={tags}
      suggestedTags={args.suggestedTags}
      onAdd={(newTags: (string | TagObjectTypes)[]) => addTags(newTags)}
      onRemove={(newTags: (string | TagObjectTypes)[]) => removeTags(newTags)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
