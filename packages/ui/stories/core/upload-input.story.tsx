import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _UploadInput, { UploadInputProps } from '../../src/core/upload-input';
import { InputSize } from '../../src/utils/types';
import { StoryGroup } from './types';

export const UploadInput = _UploadInput;

export default {
  title: `${StoryGroup.Inputs}/UploadInput`,
  component: UploadInput,
  excludeStories: ['UploadInput'],
} as Meta;

const defaultArgs = {
  size: InputSize.Md,
};

const BasicTemplate: Story<UploadInputProps> = ({ ...args }) => <UploadInput {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// Multiple
export const Multiple = BasicTemplate.bind({});
Multiple.args = {
  ...defaultArgs,
  multiple: true,
};
