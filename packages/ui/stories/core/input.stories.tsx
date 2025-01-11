import React, { useState } from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import { Type } from '@scaleflex/ui/core/input/types';
import CensorIcon from '@scaleflex/icons/censor';
import SearchIcon from '@scaleflex/icons/search';
import Success from '@scaleflex/icons/success';

import Input from '../../src/core/input';
import { InputSize } from '../../src/utils/types';
import InputDocsTemplate from '../docs/input.mdx';

const meta = {
  title: 'Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: InputDocsTemplate,
      subtitle: 'Inputs let users enter and edit text.',
    },
  },
  argTypes: {
    iconStart: {
      description: 'The icon to display at the start of the input.',
    },
    iconEnd: {
      description: 'The icon to display at the end of the input.',
    },
    placeholder: {
      description: 'The placeholder text to display in the input.',
    },
    inputType: {
      description: 'The type of input, can be text or password.',
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
    focusOnClick: {
      description: 'if true, the input will be focused on click.',
    },
    focusOnMount: {
      description: 'if true, the input will be focused on mount.',
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
    isEllipsis: {
      description: 'if true, the base input will have text-overflow: ellipsis.',
    },
    isHovering: {
      description: 'if true, it will be in hover state.',
    },
    renderTags: {
      description: 'can be used to render tags in the input.',
    },
    InputProps: {
      description: 'Props to pass to the input root element.',
    },
    iconClickStart: {
      description: 'callback function when the start icon is clicked.',
    },
    iconClickEnd: {
      description: 'callback function when the end icon is clicked.',
    },
    clearIconClick: {
      description: 'callback function when the clear icon is clicked.',
    },
    clearIcon: {
      description: 'The icon to display at the end of the input.',
    },
    copyTextMessage: {
      description: 'The message to display when the copy icon is clicked.',
    },
    copySuccessIcon: {
      description: 'The icon to display when the copy is successful.',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  size: InputSize.Md,
  placeholder: 'Enter your text',
  hideCopyIcon: false,
  readOnly: false,
  disabled: false,
  focusOnClick: true,
  copyTextMessage: 'Link copied to clipboard',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => {
    const [value, setValue] = useState('Text');

    return (
      <Input
        {...args}
        value={value}
        onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => setValue(currentTarget.value)}
      />
    );
  },
};

export const Icons: Story = {
  args: {
    ...defaultArgs,
    iconStart: <SearchIcon />,
    iconEnd: <CensorIcon />,
  },
  render: Primary.render,
};

export const Sizes: Story = {
  args: {
    ...defaultArgs,
    size: InputSize.Sm,
  },
  render: (args) => {
    const [smValue, setSmValue] = useState('Small');
    const [mdValue, setMdValue] = useState('Medium');

    return (
      <Container>
        <Input
          {...args}
          size={InputSize.Sm}
          value={smValue}
          onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => setSmValue(currentTarget.value)}
        />
        <Input
          {...args}
          size={InputSize.Md}
          value={mdValue}
          onChange={({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => setMdValue(currentTarget.value)}
        />
      </Container>
    );
  },
};

export const WithIconChange: Story = {
  args: {
    ...defaultArgs,
    iconChange: (props: any) => <Success {...props} />,
  },
  render: Primary.render,
};

export const WithPassword: Story = {
  args: {
    ...defaultArgs,
    placeholder: 'Enter your password',
    inputType: Type.Password,
  },
  render: Primary.render,
};
