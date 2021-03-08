import React from 'react';
import styled, { css } from 'styled-components';
import type { Story } from '@storybook/react';
import * as icons from '@scaleflex/icons';
import { objectKeys } from '../../src/utils/functions';

const defaultSize = 25;

export default {
  title: 'Theme/Icons',

  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
  },

  args: {
    color: '#5D6D7E',
    size: defaultSize,
  },
};

const Container = styled.div``;

const Item = styled.div(
  ({ size = defaultSize }: { size?: number }) => css`
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
  `
);

const ItemIcon = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    max-height: 100%;
    padding: 16px 0;
  `
);

const ItemTitle = styled.div`
  font-size: 11px;
  color: grey;
  font-weight: 400;
`;

export const All: Story<{ color: string; size: number }> = ({ color, size = defaultSize, ...args }) => (
  <Container {...args} style={{ color }}>
    {objectKeys(icons)
      /* .reverse() */
      .sort()
      .map((iconName) => (
        <Item size={size} key={iconName}>
          <ItemIcon>{React.createElement(icons[iconName], { size })}</ItemIcon>

          <ItemTitle>{iconName}</ItemTitle>
        </Item>
      ))}
  </Container>
);
