import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { InputProps } from './input.props';
import { sizeInputMixin, errorMixin } from './input.mixin';
import { Size } from './types';

const baseClassName = 'Input';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: flex;
    color: ${palette[PColor.IconsPrimary]};

    &:first-child {
      margin-right: 7px;
    }

    &:last-child {
      margin-left: 7px;
    }
  `
);

const Input = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<InputProps>(
  ({ size = Size.Md, error = false, fullWidth = false, theme }: With<WithTheme, InputProps>) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: text;
    width: ${fullWidth ? '100%' : '300px'};
    background: ${theme.palette[PColor.BackgroundPrimary]};
    border: 1px solid ${theme.palette[PColor.BordersSecondary]};
    border-radius: ${theme.shape.borderRadius[BRSize.Sm]};
    box-sizing: border-box;
    color: ${theme.palette[PColor.TextPrimary]};

    ${sizeInputMixin[size]}

    &:focus-within,
    &:hover {
      background-color: ${theme.palette[PColor.BackgroundSecondary]};
      border: 1px solid ${theme.palette[PColor.AccentPrimary]};
    }

    ${error && errorMixin}
  `
);

const Base = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Base'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: block;
    color: inherit;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    outline: none;

    &::placeholder {
      color: ${palette[PColor.TextPlaceholder]};
    }
  `
);

const Styled = applyDisplayNames({
  Input,
  Base,
  Icon,
});

export default Styled;
