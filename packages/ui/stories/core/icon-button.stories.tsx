import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import UploadIcon from '@scaleflex/icons/upload';
import type { IconProps } from '@scaleflex/icons/icon.props';
import IconButton from '../../src/core/icon-button';
import { ButtonSize, ButtonColor } from '../../src/utils/types';

const meta: Meta<typeof IconButton> = {
  title: 'Inputs/IconButton',
  component: IconButton,
  excludeStories: ['IconButton'],
  argTypes: {
    children: {
      description:
        "IconButton contents, normally `icon` function `(props) => <MyIcon {...props} />`. If you use function you will have adaptive icon size. If you don't need it just use `<IconButton><MyIcon /></IconButton>`",
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const defaultArgs = {
  size: ButtonSize.Md,
  color: ButtonColor.Secondary,
  disabled: false,
  active: false,
  children: (props: IconProps) => <UploadIcon {...props} />,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: ({ children, ...args }) => <IconButton {...args}>{children}</IconButton>,
};
