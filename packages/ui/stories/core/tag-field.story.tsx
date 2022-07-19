import React, { useState, useEffect } from 'react';
import type { Meta, Story } from '@storybook/react';
import { TagType } from '../../src/core/tag-field/tag-field.props';
import _TagField, { TagFieldProps } from '../../src/core/tag-field';
import { AddTagType, Background } from '../../src/core/tag-field/types';
import { StoryGroup } from './types';

export const TagField = _TagField;

export default {
  title: `${StoryGroup.Surfaces}/TagField`,
  component: TagField,
  excludeStories: ['TagField'],
  argTypes: {},
} as Meta;

const defaultArgs = {
  fullWidth: true,
  tags: ['scaleflex', 'sfx'],
  suggestedTags: ['scaleflex', 'scaleflexUi', 'scalefexIcons', 'web develompent', 'programming'],
  placeholder: 'Add tag ...',
  label: 'Tags',
  hint: 'Some hint goes here',
  background: Background.Primary,
};

const handleRemove = (
  index: number,
  tags: TagType[],
  setTags: React.Dispatch<React.SetStateAction<TagType[]>>
): void => {
  const newTags = [...tags];
  newTags.splice(index, 1);
  setTags(newTags);
};

const BasicTemplate: Story<TagFieldProps> = ({ ...args }) => {
  const [tags, setTags] = useState(args.tags);

  useEffect(() => setTags(args.tags), [args.tags]);

  return (
    <TagField
      {...args}
      tags={tags}
      suggestedTags={args.suggestedTags}
      onAdd={(newTagLabel) => setTags([...tags, newTagLabel])}
      onRemove={(index) => handleRemove(index, tags, setTags)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

const TagsObjectsTemplate: Story<TagFieldProps> = ({ ...args }) => {
  const [tags, setTags] = useState(args.tags);

  useEffect(() => setTags(args.tags), [args.tags]);

  return (
    <TagField
      {...args}
      tags={tags}
      suggestedTags={args.suggestedTags}
      onAdd={(item, type) => {
        setTags([...tags, type === AddTagType.UserInput ? { id: item, label: item } : item]);
      }}
      onRemove={(index) => handleRemove(index, tags, setTags)}
      getTagLabel={(item: any): string => item.label}
      getTagValue={(item: any): string => item.id}
    />
  );
};

const suggestedTags = [
  { id: 'scaleflex', label: 'scaleflex' },
  { id: 'sfx', label: 'sfx' },
  { id: 'scaleflexUi', label: 'scaleflexUi' },
  { id: 'scalefexIcons', label: 'scalefexIcons' },
  { id: 'webDevelompent', label: 'web develompent' },
  { id: 'programming', label: 'programming' },
];

// TagsObjects
export const TagsObjects = TagsObjectsTemplate.bind({});
TagsObjects.args = {
  ...defaultArgs,
  tags: [suggestedTags[0], suggestedTags[1]],
  suggestedTags,
};