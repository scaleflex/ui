import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Tag from '../../src/core/tag';
import { Type, Size } from '../../src/core/tag/types';
import TagDocsTemplate from '../docs/tag.mdx';

const meta: Meta<typeof Tag> = {
  title: 'DataDisplay/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TagDocsTemplate,
      subtitle: 'Tag allow users to enter information, make selections, filter content, or trigger actions',
    },
  },
  argTypes: {
    onSelect: {
      description: 'Callback function that is called when the tag is selected. Actual only for "suggested" type.',
    },
    onRemove: {
      description: 'Callback function that is called when the remove icon is clicked.',
    },
    type: {
      description: 'The type of the tag. options: `default`, `suggested`',
      options: Object.values(Type),
      control: {
        type: 'select',
      },
    },
    size: {
      description: 'The size of the tag. options: `sm`, `md`',
      options: Object.values(Size),
      control: {
        type: 'select',
      },
    },
    crossIcon: {
      description: 'if true, the cross icon will be shown.',
    },
    startIcon: {
      description: 'The icon to display at the start of the tag.',
    },
    tagIndex: {
      description: 'The index of the tag when it is used in a list of tags. it gets passed to the onRemove callback.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

const defaultArgs = {
  children: 'Cheerful woman',
  crossIcon: false,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => (
    <Tag {...args} onSelect={() => alert('onSelect handler')} onRemove={() => alert('onRemove handler')} />
  ),
};
