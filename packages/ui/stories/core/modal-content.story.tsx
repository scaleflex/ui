import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _ModalContent, { ModalContentProps } from '../../src/core/modal-content';
import { StoryGroup } from './types';

export const ModalContent = _ModalContent;

export default {
  // title: `${StoryGroup.Feedback}/Modal/ModalContent`,
  component: ModalContent,
  excludeStories: ['ModalContent'],
} as Meta;

const defaultArgs = {
  children: '1 file will be deleted, ok?',
};

const BasicTemplate: Story<ModalContentProps> = ({ ...args }) => <ModalContent {...args} />;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
