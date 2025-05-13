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
})<With<With<WithTheme, InputProps>, { $iconType: string }>>(
  ({ iconClickStart, iconClickEnd, disabled, readOnly, $iconType, theme: { palette } }) => css`
    display: flex;
    color: ${palette[PColor.IconsPrimary]};
    cursor: ${(iconClickStart || iconClickEnd) && !disabled && !readOnly ? 'pointer' : 'default'};
    flex-shrink: 0;

    ${$iconType === 'end' &&
    css`
      color: ${palette[PColor.IconsSecondary]};
    `}
  `
);

const CopyIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'CopyIcon'),
})<WithTheme>(
  ({ theme: { palette } }) => css`
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
})<With<WithTheme, { $isEllipsis?: boolean }>>(
  ({ theme: { palette }, $isEllipsis = false }) => css`
    display: block;
    color: inherit;
    width: 100%;
    min-width: fit-content;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    outline: none;

    ${$isEllipsis &&
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
})<
  With<
    With<WithTheme, InputProps>,
    { $isSelectedItems?: boolean; $fullWidth?: boolean; $error?: boolean; $hasInputActions?: boolean }
  >
>(
  ({
    size = InputSize.Md,
    $error = false,
    $fullWidth = false,
    readOnly = false,
    disabled = false,
    isHovering = false,
    $isSelectedItems = false,
    $hasInputActions = false,
    theme,
  }) => css`
    position: relative;
    display: flex;
    flex-direction: ${!$hasInputActions ? 'row' : 'column'};
    ${$hasInputActions && 'align-items: stretch;'}
    box-sizing: border-box;
    column-gap: 8px;
    cursor: text;
    transition: all 100ms ease-out;
    width: ${$fullWidth ? '100%' : '300px'};
    pointer-events: ${disabled ? 'none' : 'auto'};
    background-color: ${getInputBackgroundColor(readOnly, disabled)};
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
    border: 1px solid ${getInputBorderColor(readOnly, disabled)};
    color: ${disabled ? theme.palette[PColor.TextPlaceholder] : theme.palette[PColor.TextPrimary]};

    ${sizeInputMixin[size]}

    ${$isSelectedItems &&
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

    ${$error && errorMixin}
  `
);

const ClearIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'ClearIcon'),
})<WithTheme>(
  ({ theme: { palette } }) => css`
    display: flex;
    cursor: pointer;
    color: ${palette[PColor.IconsPrimary]};
  `
);

const NotificationBox = styled.div.attrs({
  className: generateClassNames(baseClassName, 'NotificationBox'),
})<With<With<WithTheme, InputProps>, { isTextarea?: boolean }>>(
  ({ size = InputSize.Md, isTextarea = false, theme: { palette } }) => css`
    display: flex;
    position: absolute;
    align-items: center;
    max-height: 34px;
    right: 0px;
    padding: 8px 12px;
    gap: 6px;
    bottom: ${size === InputSize.Md ? '45px' : '35px'};
    box-shadow: 0px 2px 6px ${palette[PColor.LargeShadow]};
    background-color: ${palette[PColor.BackgroundStateless]};
    border-radius: 4px;
    align-items: center;

    ${isTextarea &&
    `
      bottom: ${size === InputSize.Md ? 27 : 22}px;
      right: ${size === InputSize.Md ? 16 : 12}px;
    `}
  `
);

const NotificationIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'NotificationIcon'),
})<WithTheme>(
  ({ theme: { palette } }) => css`
    display: flex;
    color: ${palette[PColor.IconsPrimary]};
  `
);

const NotificationText = styled.span.attrs({
  className: generateClassNames(baseClassName, 'NotificationText'),
})<WithTheme>(
  ({
    theme: {
      palette,
      typography: { font },
    },
  }) => css`
    display: flex;
    white-space: nowrap;
    ${font[FV.TextSmall]};
    color: ${palette[PColor.TextPrimary]};
  `
);

const FieldWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'fieldWrapper'),
})<{ $isSelectedItems: boolean }>(
  ({ $isSelectedItems }) => css`
    width: 100%;
    height: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 8px;
    max-height: 120px;

    ${$isSelectedItems &&
    `
      overflow-y: auto;
    `};

    ::-webkit-scrollbar {
      display: none;
    }
  `
);

const InputActions = styled.div.attrs({
  className: generateClassNames(baseClassName, 'inputActions'),
})`
  padding-top: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const InputContent = styled.div.attrs({
  className: generateClassNames(baseClassName, 'inputContent'),
})`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 10px;
  box-sizing: border-box;
`;

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
  InputActions,
  InputContent,
});

export default Styled;
