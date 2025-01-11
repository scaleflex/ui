import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import QuestionMarkOutline from '@scaleflex/icons/question-mark-outline';
import { InfoOutline } from '@scaleflex/icons';

import Label from '../../src/core/label';
import LabelDocsTemplate from '../docs/label.mdx';
import { LabelSize } from '../../src/core/label/types/size';

const meta: Meta<typeof Label> = {
  title: 'DataDisplay/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: LabelDocsTemplate,
      subtitle: 'Labels display text.',
    },
  },
  argTypes: {
    disabled: {
      description: 'If true, the label will be disabled.',
    },
    error: {
      description: 'If true, the label will be in error state.',
    },
    iconStart: {
      description: 'The icon to display before the label.',
    },
    iconEnd: {
      description: 'The icon to display after the label.',
    },
    children: {
      description: 'The content of the label.',
    },
    size: {
      description: 'The size of the label. `sm`, `md`, `lg`, `xl`',
      options: Object.values(LabelSize),
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

const defaultArgs = {
  children: 'CDN Link',
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <Label {...args} />,
};

export const WithIcons: Story = {
  args: {
    ...defaultArgs,
    iconStart: <QuestionMarkOutline />,
    iconEnd: <InfoOutline />,
  },
  render: Primary.render,
};
