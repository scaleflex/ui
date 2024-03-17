import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import QuestionMarkOutline from '@scaleflex/icons/question-mark-outline';
import Label, { LabelProps } from '../../src/core/label';
import { Type } from '../../src/core/label/types';

const meta: Meta<typeof Label> = {
  title: 'Inputs/Label',
  component: Label,
  excludeStories: ['Label'],
};

export default meta;
type Story = StoryObj<typeof Label>;

const defaultArgs = {
  type: Type.Default,
  children: 'CDN Link',
};

const BasicTemplate = (args: LabelProps): JSX.Element => <Label {...args} />;

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIconStart: Story = {
  args: {
    ...defaultArgs,
    iconStart: (props: any) => <QuestionMarkOutline {...props} />,
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIconEnd: Story = {
  args: {
    ...defaultArgs,
    iconEnd: (props: any) => <QuestionMarkOutline {...props} />,
  },
  render: (args) => <BasicTemplate {...args} />,
};
