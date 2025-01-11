import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ModalContent from '../../src/core/modal-content';
import ModalContentDocsTemplate from '../docs/modal-content.mdx';

const meta: Meta<typeof ModalContent> = {
  title: 'Feedback/Modal/ModalContent',
  component: ModalContent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: ModalContentDocsTemplate,
      subtitle: 'Modal content is used to display the content of the modal.',
    },
  },
  argTypes: {
    children: {
      description: 'The content of the modal.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ModalContent>;

const defaultArgs = {
  children: '1 file will be deleted, ok?',
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <ModalContent {...args} />,
};
