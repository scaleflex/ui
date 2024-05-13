import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';

import { FontVariant } from '../../utils/types/typography/font-variant';

const baseClassName = 'Pagination';

const Pagination = styled.nav.attrs({
  className: generateClassNames(baseClassName, 'root'),
})``;

const PaginationList = styled.div.attrs({
  className: generateClassNames(baseClassName, 'list'),
})`
  margin: 0;
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
`;

const PaginationItemList = styled.li.attrs({
  className: generateClassNames(baseClassName, 'item-list'),
})``;

const PaginationItem = styled.button.attrs({
  className: generateClassNames(baseClassName, 'item'),
})<With<WithTheme, { selected: boolean }>>(
  ({ selected, theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 26px;
    margin: 0 3px;
    padding: 0 6px;
    min-width: 26px;
    outline: 0;
    border: 0;
    cursor: pointer;
    user-select: none;
    background: transparent;
    transition: all 100ms ease-out;
    color: ${selected ? theme.palette[PColor.AccentPrimaryHover] : theme.palette[PColor.TextPrimary]};

    ${theme.typography.font[FontVariant.LabelSmall]};

    &:hover {
      color: ${theme.palette[PColor.AccentPrimaryHover]};
    }
    &:disabled {
      color: ${theme.palette[PColor.ButtonDisabledText]};
    }
  `
);

const Styled = applyDisplayNames({ Pagination, PaginationList, PaginationItemList, PaginationItem });

export default Styled;
