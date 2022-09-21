import React from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';
import _PopupContent, { PopupContentProps } from '../../src/core/popup-content';
import { Status } from '../../src/core/robot/types';
import { StoryGroup } from './types';

export const PopupContent = _PopupContent;

const Item = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const items: PopupContentProps[] = [
  {
    message: 'New folder “2022 annual event” was created',
    status: Status.Success,
  },
  {
    message: 'Image resolution is less than selected resize parameters',
    status: Status.Info,
  },
  {
    message: 'You cannot upload file bigger than 25MB',
    status: Status.Error,
  },
  {
    message: 'You set visibility to public, everyone can view these files',
    status: Status.Warning,
  },
];

export default {
  title: `${StoryGroup.Feedback}/Popup/PopupContent`,
  component: PopupContent,
  excludeStories: ['PopupContent'],
} as Meta;

const defaultArgs = {};

const BasicTemplate: Story<PopupContentProps> = ({ ...args }) => <PopupContent {...args} />;

const AllTemplate: Story<PopupContentProps> = ({ ...args }) => (
  <div>
    {items.map((props) => (
      <Item key={props.status}>
        <PopupContent {...args} {...props} />
      </Item>
    ))}
  </div>
);

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = {
  ...defaultArgs,
  message: 'New folder “2022 annual event” was created',
  status: Status.Success,
};

// All
export const All = AllTemplate.bind({});
All.args = { ...defaultArgs };
