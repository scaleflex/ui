import React from 'react';
import styled from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';
import UploadIcon from '@scaleflex/icons/upload';

import { ButtonSize, ButtonColor } from '../../src/utils/types';
import { ButtonType, SideBarType } from '../../src/core/button/types';
import ButtonDocsTemplate from '../docs/button.mdx';
import Button from '../../src/core/button';

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content of the button.',
    },
    size: {
      description: 'The size of the button.',
      options: Object.values(ButtonSize),
      control: {
        type: 'select',
      },
    },
    color: {
      description: 'The color of the button.',
      options: Object.values(ButtonColor),
      control: {
        type: 'select',
      },
    },
    buttonType: {
      description: 'The type of the button.',
      options: Object.values(ButtonType),
      control: {
        type: 'select',
      },
    },
    disabled: {
      description: 'if true the button is disabled.',
    },
    active: {
      description: 'if true the button is active.',
    },
    loading: {
      description: 'if true the button is loading.',
    },
    badge: {
      description: 'The badge content for the button.',
    },
    sideBarType: {
      description: 'The sidebar type when buttonType is sidebar.',
    },
    startIcon: {
      description:
        'If you want to have proper icon size to button size (md, lg, ...) you need to use icon function like `icon={(props) => <UploadIcon {...props} />}` otherwise `icon={<UploadIcon />}`',
    },
    endIcon: {
      description:
        'If you want to have proper icon size to button size (md, lg, ...) you need to use icon function like `icon={(props) => <UploadIcon {...props} />}` otherwise `icon={<UploadIcon />}`',
    },
  },
  parameters: {
    docs: {
      subtitle:
        'You can use Button components to take different actions in your interface. It includes a variety of different sizes and styles, including primary and secondary action buttons.',
      page: ButtonDocsTemplate,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const defaultArgs = {
  children: 'Primary',
  size: ButtonSize.Md,
  color: ButtonColor.Primary,
  buttonType: ButtonType.Default,
  disabled: false,
  active: false,
  loading: false,
};

const Container = styled.div`
  & > button {
    margin: 8px;
  }
`;

const WithIconsAndBadgeContainer = styled.div`
  display: flex;
  & > button {
    margin: 8px;
  }
`;

export const Primary: Story = {
  args: { ...defaultArgs },
  render: (args) => (
    <Container>
      <Button {...args}>{args.children}</Button>
      <Button {...args} color={ButtonColor.Secondary}>
        Secondary
      </Button>
      <Button {...args} color={ButtonColor.Basic}>
        Basic
      </Button>
    </Container>
  ),
};

export const Sizes: Story = {
  args: { ...defaultArgs },
  render: (args) => (
    <Container>
      <Button {...args} size={ButtonSize.Xs}>
        XSmall
      </Button>
      <Button {...args} size={ButtonSize.Sm}>
        Small
      </Button>
      <Button {...args}>Medium</Button>
      <Button {...args} size={ButtonSize.Lg}>
        Large
      </Button>
    </Container>
  ),
};

export const WithIconsAndBadge: Story = {
  args: {
    ...defaultArgs,
  },
  render: (args) => (
    <WithIconsAndBadgeContainer>
      <Button {...args} badge="(1)">
        {args.children}
      </Button>
      <Button {...args} startIcon={<UploadIcon />}>
        {args.children}
      </Button>
      <Button {...args} endIcon={<UploadIcon />}>
        {args.children}
      </Button>
      <Button {...args} badge="(1)" startIcon={<UploadIcon />}>
        {args.children}
      </Button>
    </WithIconsAndBadgeContainer>
  ),
};

export const OtherStates: Story = {
  args: {
    ...defaultArgs,
  },
  render: (args) => (
    <WithIconsAndBadgeContainer>
      <Button {...args} loading>
        Loading
      </Button>
      <Button {...args} disabled>
        Disabled
      </Button>
      <Button {...args} active>
        Active
      </Button>
    </WithIconsAndBadgeContainer>
  ),
};

export const SideBar: Story = {
  args: {
    ...defaultArgs,
  },
  render: (args) => (
    <WithIconsAndBadgeContainer>
      <Button {...args} buttonType={ButtonType.Sidebar} sideBarType={SideBarType.Left}>
        Left
      </Button>
      <Button {...args} buttonType={ButtonType.Sidebar} sideBarType={SideBarType.Right}>
        Right
      </Button>
    </WithIconsAndBadgeContainer>
  ),
};
