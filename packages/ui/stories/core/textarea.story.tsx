import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import Success from '@scaleflex/icons/success';
import _Textarea, { TextareaProps } from '../../src/core/textarea';
import { InputSize } from '../../src/utils/types';
import { StoryGroup } from './types';

export const Textarea = _Textarea;

export default {
  title: `${StoryGroup.Inputs}/Textarea`,
  component: Textarea,
  excludeStories: ['Textarea'],
} as Meta;

const defaultArgs = {
  size: InputSize.Md,
  placeholder: 'placeholder',
  readOnly: false,
  disabled: false,
  copyTextMessage: 'Link copied to clipboard',
  copySuccessIcon: <Success size={16} />,
};

const BasicTemplate: Story<TextareaProps> = ({ ...args }) => {
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

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
