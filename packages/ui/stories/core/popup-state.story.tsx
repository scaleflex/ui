import React from 'react';
import type { Meta, Story } from '@storybook/react';
import _PopupStatus, { PopupStatusProps } from '../../src/core/popup-status';
import { Status } from '../../src/core/popup-status/types';
import { StoryGroup } from './types';

export const PopupStatus = _PopupStatus;

export default {
  title: `${StoryGroup.DataDisplay}/Robot`,
  component: PopupStatus,
  excludeStories: ['PopupStatus'],
} as Meta;

const BasicTemplate: Story<PopupStatusProps> = ({ ...args }) => <PopupStatus {...args} />;

// Success
export const Success = BasicTemplate.bind({});
Success.args = {
  status: Status.Success,
};

// Sad
export const Error = BasicTemplate.bind({});
Error.args = {
  status: Status.Error,
};

// Info
export const Info = BasicTemplate.bind({});
Info.args = {
  status: Status.Info,
};

// Warning
export const Warning = BasicTemplate.bind({});
Warning.args = {
  status: Status.Warning,
};
