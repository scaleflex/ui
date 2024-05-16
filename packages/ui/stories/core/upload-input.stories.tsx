import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import UploadInput, { UploadInputProps } from '../../src/core/upload-input';

const meta: Meta<typeof UploadInput> = {
  title: 'Inputs/UploadInput',
  component: UploadInput,
  excludeStories: ['UploadInput'],
};

export default meta;
type Story = StoryObj<typeof UploadInput>;

const defaultArgs = {};

const BasicTemplate = ({ ...args }: UploadInputProps): JSX.Element => <UploadInput {...args} />;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
