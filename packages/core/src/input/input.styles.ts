import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import type { InputProps } from './input.props';
import { sizeInputMixin, errorMixin } from './input.mixin';
import { Size } from './types';

const baseClassName = 'Input';

const Input = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<InputProps>(
  ({ size = Size.Md, error = false, theme }: WithTheme) => css`
    position: relative;
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

    ${sizeInputMixin[size]}

    &:focus-within,
    &:hover {
      background-color: ${theme.palette[PaletteColor.BackgroundSecondary]};
      border: 1px solid ${theme.palette[PaletteColor.AccentPrimary]};
    }

    ${error ? errorMixin({ theme }) : undefined}
  `
);

const Base = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Base'),
})`
  display: block;
  color: inherit;
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;
  outline: none;
`;

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: flex;
    margin-left: 6px;

    svg {
      color: ${palette[PaletteColor.IconsPrimary]};
    }
  `
);

const Styled = {
  Input,
  Base,
  Icon,
};

export default Styled;
