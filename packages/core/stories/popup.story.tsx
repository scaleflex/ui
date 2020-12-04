import React from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';
import _Popup, { PopupProps } from '../src/popup';
import { Status } from '../src/robot/types';

export const Popup = _Popup;

const Item = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const items: PopupProps[] = [
  {
    children: 'New folder “2022 annual event” was created',
    status: Status.Happy,
  },
  {
    children: 'Image resolution is less than selected resize parameters',
    status: Status.Neutral,
  },
  {
    children: 'You cannot upload file bigger than 25MB',
    status: Status.Sad,
  },
  {
    children: 'You set visibility to public, everyone can view these files',
    status: Status.Worried,
  },
];

export default {
  title: 'Feedback/Popup',
  component: Popup,
  excludeStories: ['Popup'],
} as Meta;

const defaultArgs = {};

const BasicTemplate: Story<PopupProps> = ({
  ...args
}) => (
  <Popup {...args} />
);

const AllTemplate: Story<PopupProps> = ({
  ...args
}) => (
  <div>
    {items.map((props) => (
      <Item key={props.status}>
        <Popup {...args} {...props} />
      </Item>
    ))}
  </div>
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = {
  ...defaultArgs,
  children: 'New folder “2022 annual event” was created',
  status: Status.Happy,
};

// All
export const All = AllTemplate.bind({});
All.args = { ...defaultArgs };
