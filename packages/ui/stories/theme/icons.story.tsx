import React, { useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import type { Story } from '@storybook/react';
import * as icons from '@scaleflex/icons';
import SearchIcon from '@scaleflex/icons/search';
import { objectKeys } from '../../src/utils/functions';
import InputGroup from '../../src/core/input-group';

const defaultSize = 25;

export default {
  title: 'Theme/Icons',
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    sortBy: {
      control: {
        type: 'radio',
        options: ['created', 'name'],
      },
    },
  },

  args: {
    color: '#5D6D7E',
    size: defaultSize,
    sortBy: 'name',
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

const SearchBlock = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background: #fff;
  padding: 10px 60px;
`;

export const All: Story<{ color: string; size: number; sortBy: string }> = ({
  color,
  sortBy,
  size = defaultSize,
  ...args
}) => {
  const [search, setSearch] = useState('');
  const filteredIconsNames = useMemo(() => {
    let iconsNames = [...objectKeys(icons)];

    if (search) {
      const regexp = new RegExp(search, 'i');
      iconsNames = iconsNames.filter((iconName) => regexp.test(iconName));
    }

    if (sortBy === 'name') {
      iconsNames.sort();
    }

    return iconsNames;
  }, [sortBy, search]);

  return (
    <>
      <SearchBlock>
        <InputGroup
          value={search || ''}
          onChange={({ target: { value } }) => setSearch(value)}
          placeholder="Search"
          InputProps={{
            iconStart: <SearchIcon />,
          }}
        />
      </SearchBlock>

      <Container {...args} style={{ color }}>
        {filteredIconsNames.map((iconName) => (
          <Item size={size} key={iconName}>
            <ItemIcon>{React.createElement(icons[iconName], { size })}</ItemIcon>

            <ItemTitle>{iconName}</ItemTitle>
          </Item>
        ))}
      </Container>
    </>
  );
};
