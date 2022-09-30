import React from 'react';
import styled, { css } from 'styled-components';
import type { Meta, Story } from '@storybook/react';

import _Button, { ButtonProps } from '../../src/core/button';
import { colorButtonMixin } from '../../src/core/button/button.mixin';
import { ButtonSize, ButtonColor } from '../../src/utils/types';
import BreakpointsDocs from '../docs/breakpoints.mdx';

export const Button = _Button;

export default {
  title: 'Theme/Breakpoints',
  excludeStories: ['Button'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    docs: {
      page: BreakpointsDocs,
    },
    viewport: {
      defaultViewport: 'lg',
    },
  },
} as Meta;

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
      ${colorButtonMixin[ButtonColor.Link]}
    }
    ${theme.breakpoints.between('md', 'lg')} {
      ${colorButtonMixin[ButtonColor.Primary]}
    }
    ${theme.breakpoints.up('xl')} {
      ${colorButtonMixin[ButtonColor.Error]}
    }
  `
);

const BasicTemplate: Story<ButtonProps> = ({ children, ...args }) => <StyledButton {...args}>{children}</StyledButton>;

// Basic
export const Basic = BasicTemplate.bind({});
Basic.args = { ...defaultArgs };
