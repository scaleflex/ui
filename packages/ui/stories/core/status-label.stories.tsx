import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Variant, Type, Size } from '../../src/core/status-label/types';
import StatusLabel from '../../src/core/status-label';
import StatusLabelDocsTemplate from '../docs/status-label.mdx';

const meta: Meta<typeof StatusLabel> = {
  title: 'DataDisplay/StatusLabel',
  component: StatusLabel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: StatusLabelDocsTemplate,
      subtitle: 'StatusLabel is a component that displays a status label.',
    },
  },
  argTypes: {
    label: {
      description: 'The label text.',
    },
    iconSize: {
      description: 'The size of the icon next to the label.',
    },
    size: {
      description: 'The size of the status label. options: `sm`, `md`',
      options: Object.values(Size),
      control: {
        type: 'select',
      },
    },
    variant: {
      description: 'The variant of the status label. options: `filled`, `outlined`',
      options: Object.values(Variant),
      control: {
        type: 'select',
      },
    },
    type: {
      description: 'The type of the status label. options: `default`, `error`, `success`, `warning`',
      options: Object.values(Type),
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusLabel>;

const defaultArgs = {
  label: 'Label',
  variant: Variant.Filled,
  type: Type.Default,
  size: Size.Md,
  iconSize: 8,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <StatusLabel {...args} />,
};
