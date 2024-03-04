import React from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';
import _Notification, { NotificationProps } from '../../src/core/notification';
import { NotificationStatus } from '../../src/core/notification/types';
import { StoryGroup } from './types';

export const Notification = _Notification;

const Item = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

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
    message: 'You made changes in settings. It takes few minutes to propagate and become effective',
    status: NotificationStatus.Info,
  },
  {
    message: 'You made changes in settings. It takes few minutes to propagate and become effective',
    status: NotificationStatus.Error,
  },
];

export default {
  // title: `${StoryGroup.DataDisplay}/Notification`,
  component: Notification,
  excludeStories: ['Notification'],
} as Meta;

const defaultArgs = {};

const BasicTemplate: Story<NotificationProps> = ({ ...args }) => <Notification {...args} />;

const AllTemplate: Story<NotificationProps> = ({ ...args }) => (
  <div>
    {items.map((props) => (
      <Item key={props.status}>
        <Notification {...args} {...props} />
      </Item>
    ))}
  </div>
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = {
  ...defaultArgs,
  // title: <span>Title</span>,
  message: 'You made changes in settings. It takes few minutes to propagate and become effective',
  status: NotificationStatus.Info,
};

// All
export const All = AllTemplate.bind({});
All.args = { ...defaultArgs };
