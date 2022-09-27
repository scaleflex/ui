import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import type { SwitcherProps } from './switcher.props';
import { SwitcherIconSize, SwitcherSize } from './switcher-size';
import { sizeInnerSwitcherMixin, translateSwitcherMixin, translateInnerSwitcherMixin } from './switcher.mixin';
import { Size } from '../menu-item/types';

const baseClassName = 'Switcher';

const Label = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<SwitcherProps>(
  ({ disabled }: With<WithTheme, SwitcherProps>) => css`
    position: relative;
    display: inline-flex;
    cursor: ${disabled ? 'default' : 'pointer'};
  `
);

const Switcher = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ disabled, size = Size.Sm, theme: { palette } }: With<WithTheme, SwitcherProps>) => css`
    position: relative;
    width: ${SwitcherSize[size] * 2}px;
    height: ${SwitcherSize[size]}px;
    background: ${disabled ? palette[PColor.AccentSecondaryDisabled] : palette[PColor.BackgroundSwitcherOff]};
    border-radius: 20px;
    transition: 300ms all;

    &:before {
      transition: 300ms all;
      content: '';
      position: absolute;
      width: ${SwitcherIconSize[size]}px;
      height: ${SwitcherIconSize[size]}px;
      border-radius: 35px;
      top: 50%;
      left: 4px;
      background: ${disabled ? palette[PColor.BackgroundSwitcherOff] : palette[PColor.TextPrimaryInvert]};
      transform: translate(0, -50%);
    }

    &:after {
      transition: 300ms all;
      content: '';
      position: absolute;
      ${sizeInnerSwitcherMixin[size]}
      border-radius: 20px;
      top: 50%;
      left: 5.9px;
      background: rgba(104, 121, 235, 0.4);
      transform: translate(50%, -50%);
      opacity: 0;
    }
  `
);

const Input = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Input'),
  type: 'checkbox',
})<SwitcherProps>(
  ({ disabled, size = Size.Sm, theme: { palette } }: With<WithTheme, SwitcherProps>) => css`
    opacity: 0;
    position: absolute;
    z-index: 99;
    width: ${SwitcherSize[size] * 2}px;
    height: ${SwitcherSize[size]}px;
    cursor: ${disabled ? 'default' : 'pointer'};

    &:hover + ${Switcher}:after {
      opacity: ${disabled ? 0 : 1};
    }

    &:checked + ${Switcher} {
      background: ${!disabled && palette[PColor.BackgroundSwitcherOn]};

      &:before {
        ${!disabled && translateSwitcherMixin[size]}
      }

      &:after {
        ${translateInnerSwitcherMixin[size]}
      }
    }
  `
);

const Styled = applyDisplayNames({ Switcher, Input, Label });

export default Styled;
