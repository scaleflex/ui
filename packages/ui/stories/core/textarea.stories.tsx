import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Success from '@scaleflex/icons/success';

import Textarea from '../../src/core/textarea';
import { InputSize } from '../../src/utils/types';
import TextareaDocsTemplate from '../docs/textarea.mdx';

const meta: Meta<typeof Textarea> = {
  title: 'Inputs/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: TextareaDocsTemplate,
      subtitle: 'Textarea is a component that displays a textarea.',
    },
  },
  argTypes: {
    placeholder: {
      description: 'The placeholder text to display in the input.',
    },
    size: {
      description: 'The size of the input.',
      options: Object.values(InputSize),
      control: {
        type: 'select',
      },
    },
    fullWidth: {
      description: 'if true, the input will take the full width of its container.',
    },
    error: {
      description: 'if true, the input will have an error state.',
    },
    disabled: {
      description: 'if true, the input will be disabled.',
    },
    readOnly: {
      description: 'if true, the input will be read only.',
    },
    value: {
      description: 'The value of the input.',
    },
    copyTextMessage: {
      description: 'The message to display when the copy icon is clicked.',
    },
    copySuccessIcon: {
      description: 'The icon to display when the copy is successful.',
    },
    hideCopyIcon: {
      description: 'if true, the copy icon will be hidden.',
    },
    showActionButton: {
      description: 'if true, the action button will be shown.',
    },
    showClearButton: {
      description: 'if true, the clear button will be shown.',
    },
    disableActionButton: {
      description: 'if true, the action button will be disabled.',
    },
    cols: {
      description: 'The number of columns the textarea will have.',
    },
    rows: {
      description: 'The number of rows the textarea will have.',
    },
    actionButtonLabel: {
      description: 'The label of the action button.',
    },
    clearAllButtonLabel: {
      description: 'The label of the clear all button.',
    },
    isActionButtonLoading: {
      description: 'if true, the action button will be in loading state.',
    },
    onClear: {
      description: 'callback function when the clear button is clicked.',
    },
    onClickActionButton: {
      description: 'callback function when the action button is clicked.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

const defaultArgs = {
  size: InputSize.Md,
  placeholder: 'placeholder',
  readOnly: false,
  disabled: false,
  showActionButton: false,
  showClearButton: false,
  hideCopyIcon: true,
  disableActionButton: false,
  isActionButtonLoading: false,
  actionButtonLabel: 'Action',
  clearAllButtonLabel: 'Clear all',
  copyTextMessage: 'Link copied to clipboard',
  copySuccessIcon: <Success size={16} />,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [value, setValue] = useState('Text');

    return (
      <div style={{ marginTop: 40 }}>
        <Textarea
          {...args}
          value={value}
          onChange={({ currentTarget }: React.SyntheticEvent<HTMLTextAreaElement>) => setValue(currentTarget.value)}
        />
      </div>
    );
  },
};
