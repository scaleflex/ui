import React from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';

import PopupContent, { PopupContentProps } from '../../src/core/popup-content';
import { Status } from '../../src/core/popup-status/types';

const meta: Meta<typeof PopupContent> = {
  title: 'Feedback/Popup/PopupContent',
  component: PopupContent,
  excludeStories: ['PopupContent'],
};

export default meta;
type Story = StoryObj<typeof PopupContent>;

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

const BasicTemplate = ({ ...args }: PopupContentProps): JSX.Element => <PopupContent {...args} />;

const AllTemplate = ({ ...args }: PopupContentProps): JSX.Element => (
  <div>
    {items.map((props) => (
      <Item key={props.status}>
        <PopupContent {...args} {...props} />
      </Item>
    ))}
  </div>
);

export const Primary: Story = {
  args: { message: 'New folder “2022  annual event” was created', status: Status.Success },
  render: (args) => <BasicTemplate {...args} />,
};

export const All: Story = {
  render: (args) => <AllTemplate {...args} />,
};
