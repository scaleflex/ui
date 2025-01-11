import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { Audio, DeleteOutline, Home } from '@scaleflex/icons';
import type { IconProps } from '@scaleflex/icons/icon.props';

import IconButton from '../../src/core/icon-button';
import { ButtonSize, ButtonColor, IconButtonColor } from '../../src/utils/types';
import IconButtonDocsTemplate from '../docs/icon-button.mdx';

const meta: Meta<typeof IconButton> = {
  title: 'Inputs/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: IconButtonDocsTemplate,
      subtitle: 'Display an icon button.',
    },
  },
  argTypes: {
    children: {
      description:
        "IconButton contents, normally `icon` function `(props) => <MyIcon {...props} />`. If you use function you will have adaptive icon size. If you don't need it just use `<IconButton><MyIcon /></IconButton>`",
    },
    color: {
      description: 'The color of the icon button.',
      options: Object.values(IconButtonColor),
      control: {
        type: 'select',
      },
    },
    size: {
      description: 'The size of the icon button.',
      options: Object.values(ButtonSize),
      control: {
        type: 'select',
      },
    },
    disabled: {
      description: 'if true, the icon button is disabled.',
    },
    active: {
      description: 'if true, the icon button is active.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const Container = styled.div`
  & > button {
    margin: 8px;
  }
`;

const defaultArgs = {
  size: ButtonSize.Md,
  color: ButtonColor.Primary,
  disabled: false,
  active: false,
  children: (props: IconProps) => <DeleteOutline {...props} />,
};

export const Primary: Story = {
  args: { ...defaultArgs },
  render: ({ children, ...args }) => <IconButton {...args}>{children}</IconButton>,
};

export const Sizes: Story = {
  args: { ...defaultArgs, children: (props: IconProps) => <Home {...props} />, color: ButtonColor.Secondary },
  render: ({ children, ...args }) => (
    <Container>
      <IconButton {...args} size={ButtonSize.Xs}>
        {children}
      </IconButton>
      <IconButton {...args} size={ButtonSize.Sm}>
        {children}
      </IconButton>
      <IconButton {...args}>{children}</IconButton>
      <IconButton {...args} size={ButtonSize.Lg}>
        {children}
      </IconButton>
    </Container>
  ),
};

export const Colors: Story = {
  args: { ...defaultArgs, children: (props: IconProps) => <Audio {...props} /> },
  render: ({ children, ...args }) => (
    <Container>
      <IconButton {...args} color={IconButtonColor.Primary}>
        {children}
      </IconButton>
      <IconButton {...args} color={IconButtonColor.Secondary}>
        {children}
      </IconButton>
      <IconButton {...args} color={IconButtonColor.Basic}>
        {children}
      </IconButton>
    </Container>
  ),
};
