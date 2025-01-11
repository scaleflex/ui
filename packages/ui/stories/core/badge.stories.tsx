import React from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';

import Badge, { BadgeColor } from '../../src/core/badge';
import BadgeDocsTemplate from '../docs/badge.mdx';

const meta: Meta<typeof Badge> = {
  title: 'DataDisplay/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: BadgeDocsTemplate,
      subtitle: 'Badge generates a small badge to the top-right of its child(ren).',
    },
  },
  argTypes: {
    color: {
      description: 'The color of the badge.',
      options: Object.values(BadgeColor),
      control: {
        type: 'select',
      },
    },
    inline: {
      description: 'show the badge as inline.',
    },
    size: {
      description: 'The size of the badge.',
    },
    fontSize: {
      description: 'The font size for the badge content.',
    },
    padding: {
      description: 'The padding for the badge.',
    },
    badgeContent: {
      description: 'The content of the badge.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const defaultArgs = {
  color: BadgeColor.Secondary,
  badgeContent: '5',
  size: 30,
  fontSize: 16,
  padding: '0 6px',
};

const Container = styled.div`
  & > span {
    margin: 8px;
  }
`;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => <Badge {...args} />,
};

export const Colors: Story = {
  args: { ...defaultArgs, color: BadgeColor.Secondary },
  render: (args) => (
    <Container>
      <Badge {...args} inline />
      <Badge {...args} color={BadgeColor.Primary} inline />
      <Badge {...args} color={BadgeColor.White} inline />
    </Container>
  ),
};
