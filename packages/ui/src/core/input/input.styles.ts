import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { InputProps } from './input.props';
import { sizeInputMixin, errorMixin } from './input.mixin';
import { Background, Size } from './types';

const baseClassName = 'Input';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ iconClick, theme: { palette } }: With<WithTheme, InputProps>) => css`
    display: flex;
    color: ${palette[PColor.IconsPrimary]};
    cursor: ${iconClick ? 'pointer' : 'default'};

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
  ({
    size = Size.Md,
    error = false,
    fullWidth = false,
    theme,
    background = Background.Primary,
  }: With<WithTheme, InputProps>) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: text;
    width: ${fullWidth ? '100%' : '300px'};
    background: ${background === 'primary'
      ? theme.palette[PColor.BackgroundPrimary]
      : theme.palette[PColor.BackgroundSecondary]};
    border: 1px solid ${theme.palette[PColor.BordersSecondary]};
    border-radius: ${theme.shape.borderRadius[BRSize.Sm]};
    box-sizing: border-box;
    color: ${theme.palette[PColor.TextPrimary]};

    ${sizeInputMixin[size]}

    &:focus-within {
      background-color: ${theme.palette[PColor.BackgroundSecondary]}!important;
      border: 1px solid ${theme.palette[PColor.AccentPrimary]};
    }

    &:hover {
      background-color: ${theme.palette[PColor.BackgroundPrimaryHover]};
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
