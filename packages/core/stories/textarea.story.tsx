import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import _Textarea, { TextareaProps } from '../src/textarea';
import { StoryGroup } from './types';

export const Textarea = _Textarea;

export default {
  title: `${StoryGroup.Inputs}/Textarea`,
  component: Textarea,
  excludeStories: ['Textarea'],
} as Meta;

const defaultArgs = {};

const BasicTemplate: Story<TextareaProps> = ({
  ...args
}) => {
  const [value, setValue] = useState('Text');

  return (
    <Textarea
      {...args}
      value={value}
      onChange={({ target }) => setValue(target.value)}
    />
  );
};

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
