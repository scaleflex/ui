import React from 'react';
import styled, { css } from 'styled-components';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '../../src/core/button';
import { colorButtonMixin } from '../../src/core/button/button.mixin';
import { ButtonSize, ButtonColor } from '../../src/utils/types';
import BreakpointsDocsTemplate from '../docs/breakpoints.mdx';

const meta: Meta<typeof Button> = {
  title: 'Theme/Breakpoints',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: BreakpointsDocsTemplate,
    },
    viewport: {
      defaultViewport: 'lg',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const defaultArgs = {
  children: 'Upload',
  size: ButtonSize.Md,
  color: ButtonColor.Secondary,
  disabled: false,
  loading: false,
};

const StyledButton = styled(Button)(
  ({ theme }) => css`
    ${theme.breakpoints.between('sm', 'md')} {
      ${colorButtonMixin[ButtonColor.Secondary]}
    }
    ${theme.breakpoints.down('sm')} {
      ${colorButtonMixin[ButtonColor.LinkPrimary]}
    }
    ${theme.breakpoints.between('md', 'lg')} {
      ${colorButtonMixin[ButtonColor.Primary]}
    }
    ${theme.breakpoints.up('xl')} {
      ${colorButtonMixin[ButtonColor.ErrorPrimary]}
    }
  `
);

export const Primary: Story = {
  args: { ...defaultArgs },
  render: ({ children }) => <StyledButton>{children}</StyledButton>,
};
