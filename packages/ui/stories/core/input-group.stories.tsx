import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import QuestionMarkOutline from '@scaleflex/icons/question-mark-outline';
import Success from '@scaleflex/icons/success';

import InputGroup from '../../src/core/input-group';
import { Type } from '../../src/core/input-group/types';
import { InputSize } from '../../src/utils/types';

const meta: Meta<typeof InputGroup> = {
  title: 'Inputs/Input/InputGroup',
  component: InputGroup,
  excludeStories: ['InputGroup'],
  argTypes: {
    inputProps: {
      description: 'input attributes applied directly input element.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

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

const BasicTemplate = ({ ...args }): JSX.Element => {
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

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate {...args} />,
};

export const InputWithIconStart: Story = {
  args: {
    ...defaultArgs,
    LabelProps: {
      iconStart: (props: any) => <QuestionMarkOutline size={12} {...props} />,
    },
  },
  render: (args) => <BasicTemplate {...args} />,
};
export const InputWithIconEnd: Story = {
  args: {
    ...defaultArgs,
    LabelProps: {
      iconEnd: (props: any) => <QuestionMarkOutline size={12} {...props} />,
    },
  },
  render: (args) => <BasicTemplate {...args} />,
};
export const Textarea: Story = {
  args: {
    ...defaultArgs,
    type: Type.Textarea,
  },
  render: (args) => <BasicTemplate {...args} />,
};
