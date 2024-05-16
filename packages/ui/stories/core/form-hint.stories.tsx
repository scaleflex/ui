import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FormHint from '../../src/core/form-hint';

const meta: Meta<typeof FormHint> = {
  title: 'Inputs/FormHint',
  component: FormHint,
  excludeStories: ['FormHint'],
};

export default meta;
type Story = StoryObj<typeof FormHint>;

const defaultArgs = {
  children: 'Some hint goes here',
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <FormHint {...args} />,
};
