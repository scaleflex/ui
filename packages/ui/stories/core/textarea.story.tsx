import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Textarea, { TextareaProps } from '../../src/core/textarea';
import { StoryGroup } from './types';

export const Textarea = _Textarea;

export default {
  title: `${StoryGroup.Inputs}/Textarea`,
  component: Textarea,
  excludeStories: ['Textarea'],
} as Meta;

const defaultArgs = {};

const BasicTemplate: Story<TextareaProps> = ({ ...args }) => {
  const [value, setValue] = useState('Text');

  return (
    <Textarea
      {...args}
      value={value}
      onChange={({ currentTarget }: React.SyntheticEvent<HTMLTextAreaElement>) => setValue(currentTarget.value)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
