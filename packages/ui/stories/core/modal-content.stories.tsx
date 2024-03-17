import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ModalContent from '../../src/core/modal-content';

const meta: Meta<typeof ModalContent> = {
  title: 'Feedback/Modal/ModalContent',
  component: ModalContent,
  excludeStories: ['ModalContent'],
};

export default meta;
type Story = StoryObj<typeof ModalContent>;

const defaultArgs = {
  children: '1 file will be deleted, ok?',
};

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <ModalContent {...args} />,
};
