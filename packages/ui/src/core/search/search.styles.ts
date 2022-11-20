import styled, { css } from 'styled-components';
import StyledInput from '../input/input.styles';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';

const baseClassName = 'Search';

const Search = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme }: WithTheme) => css`
  ${StyledInput.Input} {
    &:hover {
      background-color: ${theme.palette[PColor.BackgroundHover]}
    }

    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {
      display: none;
    }
`
);

const Styled = applyDisplayNames({ Search });

export default Styled;
