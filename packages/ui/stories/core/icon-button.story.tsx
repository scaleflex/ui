import React from 'react';
import type { Meta, Story } from '@storybook/react';
import UploadIcon from '@scaleflex/icons/upload';
import type { IconProps } from '@scaleflex/icons/icon.props';
import _IconButton, { IconButtonProps } from '../../src/core/icon-button';
import { ButtonSize, ButtonColor } from '../../src/utils/types';
import { StoryGroup } from './types';

export const IconButton = _IconButton;

export default {
  title: `${StoryGroup.Inputs}/IconButton`,
  component: IconButton,
  excludeStories: ['IconButton'],

  argTypes: {
    children: {
      description:
        "IconButton contents, normally `icon` function `(props) => <MyIcon {...props} />`. If you use function you will have adaptive icon size. If you don't need it just use `<IconButton><MyIcon /></IconButton>`",
    },
  },
} as Meta;

const defaultArgs = {
  size: ButtonSize.Md,
  color: ButtonColor.Secondary,
  disabled: false,
  active: false,
  children: (props: IconProps) => <UploadIcon {...props} />,
};

const BasicTemplate: Story<IconButtonProps> = ({ children, ...args }) => <IconButton {...args}>{children}</IconButton>;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
