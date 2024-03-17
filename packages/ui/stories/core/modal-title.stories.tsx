import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RemoveIcon from '@scaleflex/icons/remove';
import ModalTitle, { ModalTitleProps } from '../../src/core/modal-title';
import { Variant } from '../../src/core/modal-title/types';

const meta: Meta<typeof ModalTitle> = {
  title: 'Feedback/Modal/ModalTitle',
  component: ModalTitle,
  excludeStories: ['ModalTitle'],

  argTypes: {
    secondary: {
      description: 'Visible only with `with-icon` variant.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ModalTitle>;

const defaultArgs = {
  primary: 'Delete file?',
};

const BasicTemplate = (args: ModalTitleProps): JSX.Element => <ModalTitle {...args} />;

export const Primary: Story = {
  args: defaultArgs,
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIcon: Story = {
  args: {
    ...defaultArgs,
    variant: Variant.WithIcon,
    secondary: 'Secondary text',
    icon: <RemoveIcon size={25} />,
  },
  render: (args) => <BasicTemplate {...args} />,
};
