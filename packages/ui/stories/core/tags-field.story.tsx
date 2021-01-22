import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _TagsFields, { TagsFieldProps } from '../../src/core/tags-field';
import { StoryGroup } from './types';

export const TagsField = _TagsFields;

export default {
  title: `${StoryGroup.Surfaces}/TagField`,
  component: TagsField,
  excludeStories: ['TagsField'],

  argTypes: {

  }
} as Meta;

const defaultArgs = {
  tags: ['test', 'test2'],
  suggestedTags: ['teststs', 'what', 'where']
};

const BasicTemplate: Story<TagsFieldProps> = ({
  ...args
}) => {
  const [tags, setTags] = useState(args.tags);

  const addTags = (ev: React.ChangeEvent<HTMLInputElement>):void => {
    const val = ev.target.value || ev.currentTarget.textContent;
    if (!val) { return; }
    setTags([...tags, val]);
  };

  const removeTags = (tags : string[]) => {
    setTags(tags);
  };

  return (
    <TagsField
      style={{ width: '500px' }}
      tags={tags}
      suggestedTags={args.suggestedTags}
      onAdd={(event) => addTags(event)}
      onRemove={(tags: string[]) => removeTags(tags)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
