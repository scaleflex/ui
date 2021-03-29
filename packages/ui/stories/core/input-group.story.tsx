import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import QuestionMarkOutline from '@scaleflex/icons/question-mark-outline';
import _InputGroup, { InputGroupProps } from '../../src/core/input-group';
import { Type } from '../../src/core/input-group/types';
import { StoryGroup } from './types';

export const InputGroup = _InputGroup;

export default {
  title: `${StoryGroup.Inputs}/Input/InputGroup`,
  component: InputGroup,
  excludeStories: ['InputGroup'],

  argTypes: {
    inputProps: {
      description: 'input attributes applied directly input element.',
    },
  },
} as Meta;

const defaultArgs = {
  type: Type.Input,
  label: 'Label',
  hint: 'Some hint goes here',
};

const BasicTemplate: Story<InputGroupProps> = ({ ...args }) => {
  const [valueState, setValueState] = useState('value');

  return (
    <InputGroup
      {...args}
      value={valueState}
      onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => setValueState(currentTarget.value)}
    />
  );
};

// Input
export const Input = BasicTemplate.bind({});
Input.args = { ...defaultArgs };

// Input with icon
export const InputWithIcon = BasicTemplate.bind({});
InputWithIcon.args = {
  ...defaultArgs,
  LabelProps: {
    icon: (props: any) => <QuestionMarkOutline {...props} />,
  },
};

// Textarea
export const Textarea = BasicTemplate.bind({});
Textarea.args = {
  ...defaultArgs,
  type: Type.Textarea,
};
