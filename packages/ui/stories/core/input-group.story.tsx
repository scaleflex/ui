import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import QuestionMarkOutline from '@scaleflex/icons/question-mark-outline';
import Success from '@scaleflex/icons/success';
import _InputGroup, { InputGroupProps } from '../../src/core/input-group';
import { Type } from '../../src/core/input-group/types';
import { StoryGroup } from './types';
import { InputSize } from '../../src/utils/types';

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
  hideCopyIcon: false,
  readOnly: false,
  disabled: false,
  placeholder: 'placeholder',
  size: InputSize.Md,
  copyTextMessage: 'Link copied to clipboard',
  copySuccessIcon: <Success size={16} />,
};

const BasicTemplate: Story<InputGroupProps> = ({ ...args }) => {
  const [valueState, setValueState] = useState('Text');

  return (
    <div style={{ marginTop: 40 }}>
      <InputGroup
        {...args}
        value={valueState}
        onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => setValueState(currentTarget.value)}
      />
    </div>
  );
};

// Input
export const Input = BasicTemplate.bind({});
Input.args = { ...defaultArgs };

// Input with iconStart
export const InputWithIconStart = BasicTemplate.bind({});
InputWithIconStart.args = {
  ...defaultArgs,
  LabelProps: {
    iconStart: (props: any) => <QuestionMarkOutline size={12} {...props} />,
  },
};

// Input with iconEnd
export const InputWithIconEnd = BasicTemplate.bind({});
InputWithIconEnd.args = {
  ...defaultArgs,
  LabelProps: {
    iconEnd: (props: any) => <QuestionMarkOutline size={12} {...props} />,
  },
};

// Textarea
export const Textarea = BasicTemplate.bind({});
Textarea.args = {
  ...defaultArgs,
  type: Type.Textarea,
};
