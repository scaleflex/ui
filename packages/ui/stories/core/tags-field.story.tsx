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
  tags: ['scaleflex', 'sfx'],
  suggestedTags: ['scaleflex', 'scaleflexUi', 'scalefexIcons', 'web develompent', 'programming']
};

const BasicTemplate: Story<TagsFieldProps> = ({
  ...args
}) => {
  const [tags, setTags] = useState(args.tags);

  const addTags = (newTags : string[]):void => {
    setTags(newTags);
  };

  const removeTags = (newTags : string[]):void => {
    setTags(newTags);
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
