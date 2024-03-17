import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ModalActions from '../../src/core/modal-actions';
import Button from '../../src/core/button';

const meta: Meta<typeof ModalActions> = {
  title: 'Feedback/Modal/ModalActions',
  component: ModalActions,
  excludeStories: ['ModalActions'],
};

export default meta;
type Story = StoryObj<typeof ModalActions>;

const BasicTemplate = ({ ...args }): JSX.Element => (
  <ModalActions {...args}>
    <Button color="basic">Cancel</Button>

    <Button color="primary">Save</Button>
  </ModalActions>
);

export const Primary: Story = {
  render: (args) => <BasicTemplate {...args} />,
};
