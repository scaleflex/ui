import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { InputSize, With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { TextareaProps } from './textarea.props';
import { errorMixin, sizeTextAreaMixin, heightTextAreaMixin } from './textarea.mixin';
import { getInputBackgroundColor, getInputTextColor, getInputBorderColor } from '../input/input.utils';

const baseClassName = 'Textarea';

const Textarea = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    size = InputSize.Md,
    error = false,
    fullWidth = false,
    readOnly = false,
    disabled = false,
    autoSize = false,
    theme,
  }: With<With<WithTheme, TextareaProps>, { autoSize: boolean }>) => css`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    cursor: text;
    box-sizing: border-box;
    transition: all 100ms ease-out;
    width: ${fullWidth ? '100%' : '300px'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    background-color: ${getInputBackgroundColor(readOnly, disabled)};
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
    border: 1px solid ${getInputBorderColor(readOnly, disabled)};
    color: ${disabled ? theme.palette[PColor.TextPlaceholder] : theme.palette[PColor.TextPrimary]};

    ${heightTextAreaMixin[size]}
    ${!readOnly &&
    !disabled &&
    css`
      &:focus-within {
        background-color: ${theme.palette[PColor.BackgroundSecondary]}!important;
        border: 1px solid ${theme.palette[PColor.AccentStateless]};

        &:hover {
          border: 1px solid ${theme.palette[PColor.AccentStateless]};
        }
      }

      &:hover {
        background-color: ${theme.palette[PColor.BackgroundStateless]};
        border: 1px solid ${theme.palette[PColor.BordersPrimaryHover]};
      }
    `}

    &:hover {
      color: ${getInputTextColor(readOnly, disabled)};
    }

    ${error && errorMixin}

    ${autoSize &&
    css`
      width: auto;
      height: auto;
    `}
  `
);

const Base = styled.textarea.attrs({
  className: generateClassNames(baseClassName, 'Base'),
})<TextareaProps>(
  ({ theme: { palette }, size = InputSize.Md, readOnly = false }: With<WithTheme, TextareaProps>) => css`
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
    outline: none;
    resize: none;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    outline: none;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    font-weight: inherit;
    font-family: inherit;
    box-sizing: border-box;

    ${sizeTextAreaMixin[size]};

    ${readOnly && `padding-bottom: 0px;`}

    &::placeholder {
      color: ${palette[PColor.TextPlaceholder]};
    }

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${palette[PColor.BorderPrimaryStateless]};
      border-radius: 8px;
      border: 4px solid ${palette[PColor.BackgroundStateless]};
    }
  `
);

const CopyIcon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'CopyIcon'),
})(
  ({
    size = InputSize.Md,
    isHovering = false,
    theme: { palette },
  }: With<With<Partial<TextareaProps>, { isHovering: boolean }>, WithTheme>) => css`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    cursor: pointer;
    color: ${palette[PColor.IconsPrimary]};
    ${sizeTextAreaMixin[size]};
    ${!isHovering &&
    `
      svg {
        display: none;
      }
    `}
  `
);

const Styled = applyDisplayNames({ Textarea, CopyIcon, Base });

export default Styled;
