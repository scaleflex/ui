import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Variant, Type, Size } from '../../src/core/status-label/types';
import StatusLabel, { StatusLabelProps } from '../../src/core/status-label';

const meta: Meta<typeof StatusLabel> = {
  title: 'DataDisplay/StatusLabel',
  component: StatusLabel,
  excludeStories: ['StatusLabel'],
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

const BasicTemplate = ({ ...args }: StatusLabelProps): JSX.Element => <StatusLabel {...args} />;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <BasicTemplate {...args} />,
};
