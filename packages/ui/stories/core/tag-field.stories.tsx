import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Success from '@scaleflex/icons/success';
import { InfoOutline } from '@scaleflex/icons';

import { TagType } from '../../src/core/tag-field/tag-field.props';
import TagField, { TagFieldProps } from '../../src/core/tag-field';
import { AddTagType, Size } from '../../src/core/tag-field/types';

const meta: Meta<typeof TagField> = {
  title: 'Surfaces/TagField',
  component: TagField,
  excludeStories: ['TagField'],
  argTypes: {
    showTooltip: {
      description: 'Show tooltip with full tag name',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TagField>;

const defaultArgs = {
  tags: ['Woman', 'Dance'],
  suggestedTags: ['winter campaign', 'Q3 epic', 'roadmap', 'may 2021'],
  placeholder: 'Add tag...',
  label: 'Tags',
  hint: 'Some hint goes here',
  disableOnEnter: false,
  showTooltip: false,
  submitOnSpace: false,
  preventSubmitOnBlur: false,
  size: Size.Md,
  hideCopyIcon: false,
  showGenerateTagsButton: true,
  suggestionTooltipMessage: 'Suggested tags',
  copySuccessIcon: <Success size={16} />,
  copyTextMessage: 'Tags copied to clipboard',
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

const BasicTemplate = ({ ...args }: TagFieldProps): JSX.Element => {
  const [tags, setTags] = useState(args.tags);

  useEffect(() => setTags(args.tags), [args.tags]);

  return (
    <div style={{ marginTop: 40 }}>
      <TagField
        {...args}
        tags={tags}
        suggestedTags={args.suggestedTags}
        onAdd={(newTagLabel) => setTags([...tags, newTagLabel])}
        onRemove={(index) => handleRemove(index, tags, setTags)}
        onClear={() => setTags([])}
        alwaysShowSuggestedTags
      />
    </div>
  );
};

const TagsObjectsTemplate = ({ ...args }: TagFieldProps): JSX.Element => {
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
      onClear={() => setTags([])}
      getTagLabel={(item: any): string => item.label}
      getTagValue={(item: any): string => item.id}
      getTagIcon={(item: any): string => item.startIcon}
    />
  );
};

const suggestedTags = [
  { id: 'scaleflex', label: 'scaleflex', startIcon: <InfoOutline size={16} /> },
  { id: 'sfx', label: 'sfx' },
  { id: 'scaleflexUi', label: 'scaleflexUi' },
  { id: 'scalefexIcons', label: 'scalefexIcons' },
  { id: 'webDevelompent', label: 'web develompent' },
  { id: 'programming', label: 'programming' },
];

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};

export const TagsObjects: Story = {
  args: { ...defaultArgs, tags: [suggestedTags[0], suggestedTags[1]], suggestedTags },
  render: (args) => <TagsObjectsTemplate {...args} />,
};
