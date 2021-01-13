import React from 'react';
import type { Meta, Story } from '@storybook/react';
import QuestionMarkOutline from '@scaleflex/icons/question-mark-outline';
import _Label, { LabelProps } from '../../src/core/label';
import { Type } from '../../src/core/label/types';
import { StoryGroup } from './types';

export const Label = _Label;

export default {
  title: `${StoryGroup.Inputs}/Label`,
  component: Label,
  excludeStories: ['Label'],
} as Meta;

const defaultArgs = {
  type: Type.Default,
  children: 'CDN Link',
};

const BasicTemplate: Story<LabelProps> = ({
  ...args
}) => (
  <Label
    {...args}
  />
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// WithIcon
export const WithIcon = BasicTemplate.bind({});
WithIcon.args = {
  ...defaultArgs,
  icon: (props) => <QuestionMarkOutline {...props} />,
};
