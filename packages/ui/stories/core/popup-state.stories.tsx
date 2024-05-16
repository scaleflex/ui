import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import PopupStatus, { PopupStatusProps } from '../../src/core/popup-status';
import { Status } from '../../src/core/popup-status/types';

const meta: Meta<typeof PopupStatus> = {
  title: 'DataDisplay/PopupStatus',
  component: PopupStatus,
  excludeStories: ['PopupStatus'],
};

export default meta;
type Story = StoryObj<typeof PopupStatus>;

const BasicTemplate = ({ ...args }: PopupStatusProps): JSX.Element => <PopupStatus {...args} />;

export const Success: Story = {
  args: { status: Status.Success },
  render: (args) => <BasicTemplate {...args} />,
};

export const Error: Story = {
  args: { status: Status.Error },
  render: (args) => <BasicTemplate {...args} />,
};

export const Info: Story = {
  args: { status: Status.Info },
  render: (args) => <BasicTemplate {...args} />,
};

export const Warning: Story = {
  args: { status: Status.Warning },
  render: (args) => <BasicTemplate {...args} />,
};
