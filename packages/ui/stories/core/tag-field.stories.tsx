import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Success from '@scaleflex/icons/success';
import { InfoOutline } from '@scaleflex/icons';

import { TagType } from '../../src/core/tag-field/tag-field.props';
import TagField from '../../src/core/tag-field';
import { AddTagType, Size } from '../../src/core/tag-field/types';
import TagFieldDocsTemplate from '../docs/tag-field.mdx';

const meta: Meta<typeof TagField> = {
  title: 'Inputs/TagField',
  component: TagField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TagFieldDocsTemplate,
      subtitle: 'TagField is a component that displays a tag field.',
    },
  },
  argTypes: {
    showTooltip: {
      description: 'Show tooltip with full tag name',
    },
    disabled: {
      description: 'if true, the tag field will be disabled',
    },
    readOnly: {
      description: 'if true, the tag field will be read only',
    },
    size: {
      description: 'the size of the tag field, can be "sm" or "md"',
      options: Object.values(Size),
      control: {
        type: 'select',
      },
    },
    error: {
      description: 'if true, the tag field will be in error state',
    },
    label: {
      description: 'The label of the input.',
    },
    hint: {
      description: 'The hint of the input.',
    },
    placeholder: {
      description: 'The placeholder text of the input.',
    },
    alwaysShowSuggestedTags: {
      description: 'if true, the suggested tags will be always shown when the user input is empty',
    },
    LabelProps: {
      description:
        'The props of the label component. Please refer to the [Label](?path=/docs/datadisplay-label--docs#api) component for more information.',
    },
    clearTagsButtonLabel: {
      description: 'The label of the clear tags button.',
    },
    generateTagsButtonLabel: {
      description: 'The label of the generate tags button.',
    },
    copyTextMessage: {
      description: 'The message to display when the copy icon is clicked.',
    },
    copySuccessIcon: {
      description: 'The icon to display when the copy is successful.',
    },
    crossIcon: {
      description: 'if true, the cross icon will be shown in the tag.',
    },
    disableOnEnter: {
      description: 'if true, the tag field will be disabled when the enter key is pressed.',
    },
    filterInputWidth: {
      description: 'The width of the tag field input wrapper.',
    },
    fullWidth: {
      description: 'if true, the tag field will take the full width of the container.',
    },
    onAdd: {
      description: 'The callback function when a tag is added.',
    },
    onRemove: {
      description: 'The callback function when a tag is removed.',
    },
    getTagLabel: {
      description: 'The function to get the label of a tag.',
    },
    getTagValue: {
      description: 'The function to get the value of a tag.',
    },
    getTagIcon: {
      description: 'The function to get the icon of a tag.',
    },
    onValidate: {
      description: 'The function to validate the tag input.',
    },
    showGenerateTagsButton: {
      description: 'if true, the generate tags button will be shown.',
    },
    hideCopyIcon: {
      description: 'if true, the copy icon will be hidden.',
    },
    hideClearButton: {
      description: 'if true, the clear button will be hidden.',
    },
    onBlur: {
      description: 'The callback function when the input is blurred.',
    },
    onClear: {
      description: 'The callback function when the clear button is clicked.',
    },
    onFocus: {
      description: 'The callback function when the input is focused.',
    },
    onGenerate: {
      description: 'The callback function when the generate tags button is clicked.',
    },
    placeholderAlwaysVisible: {
      description: 'if true, the placeholder will be always visible.',
    },
    preventSubmitOnBlur: {
      description: 'if true, the tag field will not submit on blur.',
    },
    submitOnSpace: {
      description: 'if true, the tag field will submit on space.',
    },
    loading: {
      description: 'if true, the tag field will be in loading state.',
    },
    suggestionLabel: {
      description: 'The label of the suggestion.',
    },
    suggestionTooltipMessage: {
      description: 'The tooltip message of the suggestion.',
    },
    suggestionsFilter: {
      description: 'The function to filter the suggestions.',
    },
    tags: {
      description: 'The tags to display in the tag field. It accepts an array of strings, objects, or React nodes.',
    },
    suggestedTags: {
      description:
        'The suggested tags to display in the tag field. It accepts an array of strings, objects, or React nodes.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TagField>;

const defaultArgs = {
  tags: ['Woman', 'Dance'],
  suggestedTags: ['winter campaign', 'Q3 epic', 'roadmap', 'may 2021'],
  label: 'Tags',
  hint: 'Some hint goes here',
  disableOnEnter: false,
  showTooltip: false,
  submitOnSpace: false,
  preventSubmitOnBlur: false,
  size: Size.Md,
  error: false,
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
  render: (args) => {
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
  },
};

export const TagsObjects: Story = {
  args: { ...defaultArgs, tags: [suggestedTags[0], suggestedTags[1]], suggestedTags },
  render: (args) => {
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
  },
};
