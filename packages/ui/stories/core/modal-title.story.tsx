import React from 'react';
import type { Meta, Story } from '@storybook/react';
import RemoveIcon from '@scaleflex/icons/remove';
import _ModalTitle, { ModalTitleProps } from '../../src/core/modal-title';
import { Variant } from '../../src/core/modal-title/types';
import { StoryGroup } from './types';

export const ModalTitle = _ModalTitle;

export default {
  // title: `${StoryGroup.Feedback}/Modal/ModalTitle`,
  component: ModalTitle,
  excludeStories: ['ModalTitle'],

  argTypes: {
    secondary: {
      description: 'Visible only with `with-icon` variant.',
    },
  },
} as Meta;

const defaultArgs = {
  primary: 'Delete file?',
};

const BasicTemplate: Story<ModalTitleProps> = ({ ...args }) => <ModalTitle {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };

// WithIcon
export const WithIcon = BasicTemplate.bind({});
WithIcon.args = {
  ...defaultArgs,
  variant: Variant.WithIcon,
  secondary: 'Secondary text',
  icon: <RemoveIcon size={25} />,
};
