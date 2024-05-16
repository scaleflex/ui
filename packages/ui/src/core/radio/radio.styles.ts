import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import type { RadioProps } from './radio.props';
import { RadioSize } from './size';
import { sizeInnerRadioMixin, sizeRadioMixin } from './radio.mixin';

const baseClassName = 'Radio';

const Radio = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<WithTheme, RadioProps>>(
  ({ disabled, theme }) => css`
    position: relative;
    display: inline-flex;
    align-items: inherit;
    justify-content: inherit;
    cursor: ${disabled ? 'default' : 'pointer'};
    color: ${theme.palette[PColor.AccentPrimary]};
  `
);

const RadioBox = styled.div.attrs({
  className: generateClassNames(baseClassName, 'radio'),
})<With<WithTheme, RadioProps>>(
  ({ disabled, size = RadioSize.Sm, theme }) => css`
    border-radius: 50%;
    border: 1px solid
      ${disabled ? theme.palette[PColor.BordersSecondary] : theme.palette[PColor.BorderPrimaryStateless]};

    ${sizeRadioMixin[size]}

    &::before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      display: block;
      background: ${theme.palette[PColor.AccentStateless_0_4_Opacity]};
      border-radius: 50%;
      cursor: ${disabled ? 'default' : 'pointer'};
      transform: translate(-50%, -50%);
      opacity: 0;

      ${sizeInnerRadioMixin[size]}
    }

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      background: ${disabled ? theme.palette[PColor.BackgroundActive] : theme.palette[PColor.AccentStateless]};
      border-radius: 50%;
      cursor: ${disabled ? 'default' : 'pointer'};
      opacity: ${disabled ? 1 : 0};
    }
  `
);

const Input = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Input'),
  type: 'radio',
})<With<WithTheme, RadioProps>>(
  ({ disabled, size = RadioSize.Sm, theme }) => css`
    position: absolute;
    opacity: 0;
    border: 1px solid ${theme.palette[PColor.BorderPrimaryStateless]};
    border-radius: 50%;
    cursor: ${disabled ? 'default' : 'pointer'};
    margin: 0;
    z-index: 99;

    ${sizeRadioMixin[size]}

    &:hover + ${RadioBox} {
      &::before {
        opacity: ${disabled ? 0 : 1};
        transition: all 100ms ease-out;
      }
    }

    &:checked + ${RadioBox} {
      &::before {
        opacity: 1;
        background: ${theme.palette[PColor.IconsInvert]};
        transition: all 100ms ease-out;
      }

      &::after {
        opacity: 1;
        background: ${disabled ? theme.palette[PColor.BackgroundGrey] : theme.palette[PColor.AccentStateless]};
        transition: all 100ms ease-out;
      }
    }
  `
);

const Styled = applyDisplayNames({ Radio, Input, RadioBox });

export default Styled;
