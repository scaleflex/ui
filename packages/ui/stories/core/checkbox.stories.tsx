import React, { useState } from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';

import { Size, Type } from '../../src/core/check-box/types';
import CheckBox from '../../src/core/check-box';
import checkboxDocsTemplate from '../docs/checkbox.mdx';

const meta: Meta<typeof CheckBox> = {
  title: 'Inputs/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      description: 'If true, the component is checked.',
    },
    checkBoxProps: {
      description:
        '[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes) applied to the input element.',
    },
    disabled: {
      description: 'If true, the component is disabled.',
    },
    onChange: {
      description: 'Callback fired when the state is changed',
    },
    readOnly: {
      description: 'If true, the component is readonly.',
    },
    size: {
      description: 'Size of the checkbox, `sm` or `md`',
      options: Object.values(Size),
      control: {
        type: 'select',
      },
    },
    type: {
      description: 'Type of the checkbox, `checkbox` or `intermediate`',
      options: Object.values(Type),
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'Checkboxes allow the user to select one or more items from a set.',
      page: checkboxDocsTemplate,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

const defaultArgs = {
  checked: false,
  readOnly: false,
  disabled: false,
  size: Size.Md,
  type: Type.Checkbox,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: ({ ...args }) => {
    const [checkedState, setCheckedState] = useState(true);

    return (
      <Container>
        <CheckBox {...args} checked={checkedState} onChange={(event) => setCheckedState(event.target.checked)} />
        <CheckBox {...args} disabled />
        <CheckBox {...args} disabled checked />
      </Container>
    );
  },
};

export const Sizes: Story = {
  args: { ...defaultArgs },
  render: ({ ...args }) => (
    <Container>
      <CheckBox {...args} checked size={Size.Sm} />
      <CheckBox {...args} checked />
    </Container>
  ),
};

export const Types: Story = {
  args: { ...defaultArgs },
  render: ({ ...args }) => (
    <Container>
      <CheckBox {...args} checked />
      <CheckBox {...args} type={Type.Intermediate} checked />
    </Container>
  ),
};
