import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import type { InputGroupProps } from './input-group.props';
import { sizeInputGroupMixin, errorMixin } from './input-group.mixin';
// import { Type } from './types';

const baseClassName = 'InputGroup';

const InputGroup = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ error = false, theme }: With<WithTheme, InputGroupProps>) => css`
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
    color: ${theme.palette[PaletteColor.TextPrimary]}; */

    /* ${sizeInputGroupMixin[size]} */

    /* &:focus,
    &:hover {
      background-color: ${theme.palette[PaletteColor.BackgroundSecondary]};
      border: 1px solid ${theme.palette[PaletteColor.AccentPrimary]};
    } */

    /* ${error ? errorMixin({ theme }) : undefined} */
  `
);

const Styled = { InputGroup };

export default Styled;
