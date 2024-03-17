import React from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import Notification, { NotificationProps } from '../../src/core/notification';
import { NotificationStatus } from '../../src/core/notification/types';

const meta: Meta<typeof Notification> = {
  title: 'DataDisplay/Notification',
  component: Notification,
  excludeStories: ['Notification'],
};

export default meta;
type Story = StoryObj<typeof Notification>;

const defaultArgs = {};

const Item = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const itemsMessage = 'You made changes in settings. It takes few minutes to propagate and become effective';
const items: NotificationProps[] = [
  {
    message: (
      <span>
        Direct link to the file in the storage container. Should not be used in production as the media asset is not
        acelerated and does not support on-the-fly image transformation. See{' '}
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>documentation</span> for more details.
      </span>
    ),
    status: NotificationStatus.Warning,
  },
  {
    message: itemsMessage,
    status: NotificationStatus.Info,
  },
  {
    message: itemsMessage,
    status: NotificationStatus.Error,
  },
];

export const Primary: Story = {
  args: {
    message: itemsMessage,
    status: NotificationStatus.Info,
  },
  render: (args) => <Notification {...args} />,
};

export const All: Story = {
  args: defaultArgs,
  render: (args: NotificationProps) => (
    <div>
      {items.map((props) => (
        <Item key={props.status}>
          <Notification {...args} {...props} />
        </Item>
      ))}
    </div>
  ),
};
