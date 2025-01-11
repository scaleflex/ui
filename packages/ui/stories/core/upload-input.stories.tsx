import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import UploadInput from '../../src/core/upload-input';
import UploadInputDocsTemplate from '../docs/upload-input.mdx';

const meta: Meta<typeof UploadInput> = {
  title: 'Inputs/UploadInput',
  component: UploadInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: UploadInputDocsTemplate,
      subtitle: 'Displays an upload input.',
    },
  },
  argTypes: {
    buttonLabel: {
      description: 'The label of the button.',
    },
    placeholder: {
      description: 'The placeholder of the input.',
    },
    buttonColor: {
      description: 'The color of the button. see color in button component.',
    },
    error: {
      description: 'if true, the input is in an error state.',
    },
    onChange: {
      description: 'The callback function that is called when the input value changes.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof UploadInput>;

const defaultArgs = {};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <UploadInput {...args} />,
};
