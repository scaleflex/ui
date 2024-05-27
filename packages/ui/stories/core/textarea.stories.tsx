import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Success from '@scaleflex/icons/success';

import Textarea, { TextareaProps } from '../../src/core/textarea';
import { InputSize } from '../../src/utils/types';

const meta: Meta<typeof Textarea> = {
  title: 'Inputs/Textarea',
  component: Textarea,
  excludeStories: ['Textarea'],
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

const BasicTemplate = ({ ...args }: TextareaProps): JSX.Element => {
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
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
