import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import QuestionMarkOutline from '@scaleflex/icons/question-mark-outline';
import Success from '@scaleflex/icons/success';

import InputGroup from '../../src/core/input-group';
import { Type } from '../../src/core/input-group/types';
import { InputSize } from '../../src/utils/types';
import InputGroupDocsTemplate from '../docs/input-group.mdx';

const meta: Meta<typeof InputGroup> = {
  title: 'Inputs/Input/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: InputGroupDocsTemplate,
      subtitle: 'InputGroup is a component that wraps an input and a label.',
    },
  },
  argTypes: {
    placeholder: {
      description: 'The placeholder text to display in the input.',
    },
    size: {
      description: 'The size of the input.',
      options: Object.values(InputSize),
      control: {
        type: 'select',
      },
    },
    fullWidth: {
      description: 'if true, the input will take the full width of its container.',
    },
    error: {
      description: 'if true, the input will have an error state.',
    },
    disabled: {
      description: 'if true, the input will be disabled.',
    },
    readOnly: {
      description: 'if true, the input will be read only.',
    },
    hideCopyIcon: {
      description: 'if true, the copy icon will be hidden.',
    },
    inputRef: {
      description: 'The ref passed to the input component.',
    },
    type: {
      description: 'The type of the input.',
      options: Object.values(Type),
      control: {
        type: 'select',
      },
    },
    value: {
      description: 'The value of the input.',
    },
    label: {
      description: 'The label of the input.',
    },
    hint: {
      description: 'The hint of the input.',
    },
    InputProps: {
      description: 'Props to pass to the input root element.',
    },
    inputProps: {
      description: 'Props to pass to the input component. please refer to the input component for more details.',
    },
    TextareaProps: {
      description: 'Props to pass to the textarea component. please refer to the textarea component for more details.',
    },
    LabelProps: {
      description:
        'The props of the label component. Please refer to the [Label]((../?path=/docs/datadisplay-label--docs#api) component for more information.',
    },
    copyTextMessage: {
      description: 'The message to display when the copy icon is clicked.',
    },
    copySuccessIcon: {
      description: 'The icon to display when the copy is successful.',
    },
    onChange: {
      description: 'The callback function when the input value changes.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

const defaultArgs = {
  type: Type.Input,
  label: 'Label',
  hint: 'Some hint goes here',
  hideCopyIcon: true,
  readOnly: false,
  disabled: false,
  placeholder: 'placeholder',
  size: InputSize.Md,
  copyTextMessage: 'Link copied to clipboard',
  copySuccessIcon: <Success size={16} />,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
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
  },
};

export const InputWithIconStart: Story = {
  args: {
    ...defaultArgs,
    LabelProps: {
      iconStart: (props: any) => <QuestionMarkOutline size={12} {...props} />,
    },
  },
  render: Primary.render,
};
export const InputWithIconEnd: Story = {
  args: {
    ...defaultArgs,
    LabelProps: {
      iconEnd: (props: any) => <QuestionMarkOutline size={12} {...props} />,
    },
  },
  render: Primary.render,
};
export const Textarea: Story = {
  args: {
    ...defaultArgs,
    type: Type.Textarea,
  },
  render: Primary.render,
};
