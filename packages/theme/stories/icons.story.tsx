import React from 'react';
import styled, { css } from 'styled-components';
import type { Story } from '@storybook/react';
import { objectKeys } from '@sfx-ui/utils/functions';
// eslint-disable-next-line unicorn/import-index
import * as icons from '@sfx-ui/icons/index';

export default {
  title: 'Theme/Icons',

  argTypes: {
    color: {
      control: {
        type: 'color'
      }
    }
  },

  args: {
    color: '#5D6D7E',
    size: 30,
  }
};

const Container = styled.div``;

const Item = styled.div(({ size = 30 }: {size?: number}) => css`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  width: ${Math.max(150, size)}px;
  padding: 8px 4px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;

  &:hover {
    background: #f6f9fc;
  }
`);

const ItemIcon = styled.div(() => css`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  padding: 16px 0;
`);

const ItemTitle = styled.div`
  font-size: 11px;
  color: grey;
  font-weight: 400;
`;

export const All: Story<{color: string, size: number}> = ({ color, size = 30, ...args }) => (
  <Container {...args} style={{ color }}>
    {objectKeys(icons).map((iconName) => (
      <Item size={size} key={iconName}>
        <ItemIcon>{React.createElement(icons[iconName], { size })}</ItemIcon>

        <ItemTitle>{ iconName }</ItemTitle>
      </Item>
    ))}
  </Container>
);
