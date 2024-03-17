import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import UploadIcon from '@scaleflex/icons/upload';
import type { IconProps } from '@scaleflex/icons/icon.props';
import { ButtonType } from '@scaleflex/ui/core/button/types';
import Button, { ButtonProps } from '../../src/core/button';
import { ButtonSize, ButtonColor } from '../../src/utils/types';

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  excludeStories: ['Button'],
  argTypes: {
    startIcon: {
      description:
        'If you want to have proper icon size to button size (md, lg, ...) you need to use icon function like `icon={(props) => <UploadIcon {...props} />}` otherwise `icon={<UploadIcon />}`',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const defaultArgs = {
  children: 'Upload',
  size: ButtonSize.Md,
  color: ButtonColor.Secondary,
  buttonType: ButtonType.Default,
  disabled: false,
  active: false,
  loading: false,
};

const BasicTemplate = ({ children, ...args }: ButtonProps): JSX.Element => <Button {...args}>{children}</Button>;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIcon: Story = {
  args: {
    ...defaultArgs,
    startIcon: (props: IconProps) => <UploadIcon {...props} />,
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithBadge: Story = {
  args: {
    ...defaultArgs,
    badge: '(1)',
    children: 'Select',
  },
  render: (args) => <BasicTemplate {...args} />,
};

export const WithIconsAndBadge: Story = {
  args: {
    ...defaultArgs,
    startIcon: (props: IconProps) => <UploadIcon {...props} />,
    badge: '(1)',
  },
  render: (args) => <BasicTemplate {...args} />,
};
