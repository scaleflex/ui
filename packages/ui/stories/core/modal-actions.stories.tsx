import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ModalActions from '../../src/core/modal-actions';
import { Align } from '../../src/core/modal-actions/types';
import Button from '../../src/core/button';
import ModalActionsDocsTemplate from '../docs/modal-actions.mdx';

const meta: Meta<typeof ModalActions> = {
  title: 'Feedback/Modal/ModalActions',
  component: ModalActions,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: ModalActionsDocsTemplate,
      subtitle: 'Modal actions are used to display the actions of the modal.',
    },
  },
  argTypes: {
    children: {
      description: 'The content of the modal actions.',
    },
    align: {
      description: 'The alignment of the modal actions. options: `left`, `center`, `right`',
      options: Object.values(Align),
      control: {
        type: 'select',
      },
    },
  },
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
