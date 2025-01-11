import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RemoveIcon from '@scaleflex/icons/remove';

import ModalTitle from '../../src/core/modal-title';
import { Variant } from '../../src/core/modal-title/types';
import ModalTitleDocsTemplate from '../docs/modal-title.mdx';

const meta: Meta<typeof ModalTitle> = {
  title: 'Feedback/Modal/ModalTitle',
  component: ModalTitle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: ModalTitleDocsTemplate,
      subtitle: 'Modal title is used to display the title of the modal.',
    },
  },
  argTypes: {
    primary: {
      description: 'The primary content of the modal title.',
    },
    secondary: {
      description: 'label text visible only with `with-icon` variant.',
    },
    onClose: {
      description:
        'The callback function that is called when the modal is closed. Triggers when the close button is clicked.',
    },
    variant: {
      description: 'The variant of the modal title. options: `default`, `with-icon`',
      options: Object.values(Variant),
      control: {
        type: 'select',
      },
    },
    icon: {
      description: 'The icon to display next to the primary label. used only with `with-icon` variant.',
    },
    iconShadow: {
      description: 'If true, the icon shadow is visible.',
    },
    primaryLabelStyles: {
      description: 'The styles of the primary label.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ModalTitle>;

const defaultArgs = {
  primary: 'Delete file?',
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <ModalTitle {...args} />,
};

export const WithIcon: Story = {
  args: {
    ...defaultArgs,
    variant: Variant.WithIcon,
    secondary: 'Secondary text',
    icon: <RemoveIcon size={25} />,
  },
  render: (args) => <ModalTitle {...args} />,
};
