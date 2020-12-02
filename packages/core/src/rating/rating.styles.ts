import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import type { RatingProps } from './rating.props';
// import { sizeRatingMixin, errorMixin } from './rating.mixin';

const baseClassName = 'Rating';

const Rating = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<RatingProps>(
  ({ theme }: WithTheme) => css`
    display: inline-flex;

    /* position: relative;
    display: inline-flex;
    align-items: center;
    cursor: text;
    font-size: 1rem;
    width: 300px;
    padding: 0 7px 0 12px;
    background: ${theme.palette[PaletteColor.BackgroundPrimary]};
    border: 1px solid ${theme.palette[PaletteColor.BordersSecondary]};
    border-radius: 2px;
    box-sizing: border-box;
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    color: ${theme.palette[PaletteColor.TextPrimary]};

    ${sizeRatingMixin[size]}

    &:focus-within,
    &:hover {
      background-color: ${theme.palette[PaletteColor.BackgroundSecondary]};
      border: 1px solid ${theme.palette[PaletteColor.AccentPrimary]};
    }

    ${error ? errorMixin({ theme }) : undefined} */
  `
);

const Item = styled.label.attrs({
  className: generateClassNames(baseClassName, 'Item'),
})(
  ({ readOnly = false, theme: { palette } }: With<WithTheme, {readOnly?: boolean}>) => css`
    position: relative;
    display: inline-flex;
    margin-left: 3px;
    /* width: 9px;
    height: 8.57px; */

    ${!readOnly && css`
      cursor: pointer;
    `}

    input {
      position: absolute;
      visibility: hidden;
      /* width: 0;
      height: 0; */
    /* top: 0;
    left: 0; */
    }
  `
);

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  () => css`

  `
);

const Styled = {
  Rating,
  Item,
  Icon,
};

export default Styled;
