import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import type { SwitcherProps } from './switcher.props';
import { SwitcherSize } from './switcher-size';
import { sizeInnerSwitcherMixin, translateSwitcherMixin, translateInnerSwitcherMixin } from './switcher.mixin';
import { getSwitcherIconSize, getSwitcherSize } from './switcher.utils';

const baseClassName = 'Switcher';

const SwitcherWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<SwitcherProps>(
  ({ disabled }: With<WithTheme, SwitcherProps>) => css`
    position: relative;
    display: inline-flex;
    cursor: ${disabled ? 'default' : 'pointer'};
  `
);

const Switcher = styled.div.attrs({
  className: generateClassNames(baseClassName, 'switcher'),
})(
  ({ disabled, size = SwitcherSize.Sm, theme: { palette } }: With<WithTheme, SwitcherProps>) => css`
    position: relative;
    width: ${getSwitcherSize(size) * 2}px;
    height: ${getSwitcherSize(size)}px;
    background: ${disabled ? palette[PColor.BackgroundActive] : palette[PColor.BackgroundGrey]};
    border-radius: 20px;

    &:before {
      content: '';
      position: absolute;
      width: ${getSwitcherIconSize(size)}px;
      height: ${getSwitcherIconSize(size)}px;
      border-radius: 35px;
      top: 50%;
      left: ${size === SwitcherSize.Lg ? '3' : '2'}px;
      transition: transform 0.3s ease 0s, opacity 0.5s ease 0s;
      background: ${disabled ? palette[PColor.BackgroundGrey] : palette[PColor.IconsMuted]};
      transform: translate(0, -50%);
    }

    &:after {
      content: '';
      position: absolute;
      ${sizeInnerSwitcherMixin[size]}
      border-radius: 20px;
      top: 50%;
      left: ${size === SwitcherSize.Lg ? '6.9' : '3.9'}px;
      background: ${palette[PColor.IconsInvert]};
      transform: translate(50%, -50%);
      transition: transform 0.3s ease 0s, opacity 0.3s ease 0s;
      opacity: 0;
    }
  `
);

const Input = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Input'),
  type: 'checkbox',
})<SwitcherProps>(
  ({ $disabled, size = SwitcherSize.Sm, theme: { palette } }: With<WithTheme, SwitcherProps>) => css`
    opacity: 0;
    position: absolute;
    z-index: 99;
    width: ${getSwitcherSize(size) * 2}px;
    height: ${getSwitcherSize(size)}px;
    cursor: ${$disabled ? 'default' : 'pointer'};

    &:hover + ${Switcher}:after {
      opacity: ${$disabled ? 0 : 1};
    }

    &:checked {
      &:hover + ${Switcher} {
        background: ${!$disabled && palette[PColor.AccentPrimaryHover]};
      }
    }

    &:checked + ${Switcher} {
      background: ${$disabled ? palette[PColor.Accent_2_8_Opacity] : palette[PColor.AccentStateless]};

      &:before {
        ${translateSwitcherMixin[size]};
        background: ${palette[PColor.IconsInvert]};
      }

      &:after {
        ${translateInnerSwitcherMixin[size]}
        background: ${palette[PColor.AccentStateless_0_4_Opacity]};
      }
    }
  `
);

const Styled = applyDisplayNames({ Switcher, Input, SwitcherWrapper });

export default Styled;
