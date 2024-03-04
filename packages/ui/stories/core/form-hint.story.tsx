import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _FormHint, { FormHintProps } from '../../src/core/form-hint';
import { StoryGroup } from './types';

export const FormHint = _FormHint;

export default {
  // title: `${StoryGroup.Inputs}/FormHint`,
  component: FormHint,
  excludeStories: ['FormHint'],
} as Meta;

const defaultArgs = {
  children: 'Some hint goes here',
};

const BasicTemplate: Story<FormHintProps> = ({ ...args }) => <FormHint {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
