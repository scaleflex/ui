import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { FontVariant as FV } from '../../utils/types/typography';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { InputProps } from './input.props';
import { sizeInputMixin, fontSizeInputMixin, errorMixin } from './input.mixin';
import { InputSize } from '../../utils/types';
import { getInputBackgroundColor, getInputTextColor, getInputBorderColor } from './input.utils';

const baseClassName = 'Input';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({
    iconClickStart,
    iconClickEnd,
    disabled,
    readOnly,
    iconType,
    theme: { palette },
  }: With<WithTheme, InputProps>) => css`
    display: flex;
    color: ${palette[PColor.IconsPrimary]};
    cursor: ${(iconClickStart || iconClickEnd) && !disabled && !readOnly ? 'pointer' : 'default'};

    ${iconType === 'end' &&
    css`
      color: ${palette[PColor.IconsSecondary]};
    `}
  `
);

const CopyIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'CopyIcon'),
})(
  ({ theme: { palette } }: With<WithTheme, InputProps>) => css`
    display: flex;
    color: ${palette[PColor.IconsSecondary]};
    cursor: pointer;
  `
);

const PasswordIcon = styled(CopyIcon).attrs({
  className: generateClassNames(baseClassName, 'PasswordIcon'),
})``;

const Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container'),
})<InputProps>(
  () => css`
    display: block;
    color: inherit;
    font-size: inherit;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    outline: none;
  `
);

const Base = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Base'),
})<InputProps>(
  ({ theme: { palette }, isEllipsis = false }: With<WithTheme, InputProps>) => css`
    display: block;
    color: inherit;
    width: 100%;
    min-width: fit-content;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    outline: none;

    ${isEllipsis &&
    css`
      text-overflow: ellipsis;
    `}

    &::placeholder {
      color: ${palette[PColor.TextPlaceholder]};
    }
  `
);

const Input = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<InputProps>(
  ({
    size = InputSize.Md,
    error = false,
    fullWidth = false,
    readOnly = false,
    disabled = false,
    isHovering = false,
    isSelectedItems = false,
    theme,
  }: With<WithTheme, InputProps>) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    column-gap: 8px;
    cursor: text;
    transition: all 100ms ease-out;
    width: ${fullWidth ? '100%' : '300px'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    background-color: ${getInputBackgroundColor(readOnly, disabled)};
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
    border: 1px solid ${getInputBorderColor(readOnly, disabled)};

    color: ${disabled ? theme.palette[PColor.TextPlaceholder] : theme.palette[PColor.TextPrimary]};

    ${sizeInputMixin[size]}

    ${isSelectedItems &&
    `
      height: fit-content;

      ${Base} {
        max-width: fit-content;
        min-width: 20px;
        flex-grow: 1;
        width: 40px;
      }
    `};

    ${Base} {
      ${fontSizeInputMixin[size]}
    }

    ${!readOnly &&
    !disabled &&
    css`
      &:focus-within {
        background-color: ${theme.palette[PColor.BackgroundSecondary]}!important;
        border: 1px solid ${theme.palette[PColor.AccentStateless]};

        &:hover {
          border: 1px solid ${theme.palette[PColor.AccentStateless]};
          ${Icon} {
            color: ${theme.palette[PColor.IconsPrimary]};
          }
        }
      }

      ${isHovering &&
      css`
        ${Icon} {
          color: ${theme.palette[PColor.IconsPrimaryHover]};
        }
      `}

      &:hover {
        background-color: ${theme.palette[PColor.BackgroundStateless]};
        border: 1px solid ${theme.palette[PColor.BordersPrimaryHover]};

        ${Icon} {
          color: ${theme.palette[PColor.IconsPrimaryHover]};
        }
      }
    `}

    ${disabled &&
    css`
      ${Icon} {
        color: ${theme.palette[PColor.IconsMuted]};
      }
    `}

    &:hover {
      color: ${getInputTextColor(readOnly, disabled)};
    }

    ${error && errorMixin}
  `
);

const ClearIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'ClearIcon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: flex;
    cursor: pointer;
    color: ${palette[PColor.IconsPrimary]};
  `
);

const NotificationBox = styled.div.attrs({
  className: generateClassNames(baseClassName, 'NotificationBox'),
})<InputProps>(
  ({ size = InputSize.Md, theme: { palette } }: With<WithTheme, InputProps>) => css`
    display: flex;
    position: absolute;
    align-items: center;
    max-height: 34px;
    right: 0px;
    padding: 8px 12px;
    column-gap: 6px;
    bottom: ${size === InputSize.Md ? '45px' : '35px'};
    box-shadow: 0px 2px 6px ${palette[PColor.LargeShadow]};
    background-color: ${palette[PColor.BackgroundStateless]};
    border-radius: 4px;
  `
);

const NotificationIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'NotificationIcon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    color: ${palette[PColor.IconsPrimary]};
  `
);

const NotificationText = styled.span.attrs({
  className: generateClassNames(baseClassName, 'NotificationText'),
})(
  ({
    theme: {
      palette,
      typography: { font },
    },
  }: WithTheme) => css`
    white-space: nowrap;
    ${font[FV.TextSmall]};
    color: ${palette[PColor.TextPrimary]};
  `
);

const FieldWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'fieldWrapper'),
})(
  ({ isSelectedItems }: { isSelectedItems: boolean }) => css`
    width: 100%;
    height: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 8px;
    max-height: 120px;

    ${isSelectedItems &&
    `
      overflow-y: auto;
    `};

    ::-webkit-scrollbar {
      display: none;
    }
  `
);

const Styled = applyDisplayNames({
  Input,
  Container,
  Base,
  Icon,
  CopyIcon,
  PasswordIcon,
  ClearIcon,
  NotificationBox,
  NotificationIcon,
  NotificationText,
  FieldWrapper,
});

export default Styled;
