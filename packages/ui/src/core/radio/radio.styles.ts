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
})(
  ({ disabled, theme }: With<WithTheme, RadioProps>) => css`
    position: relative;
    display: inline-flex;
    align-items: inherit;
    justify-content: inherit;
    cursor: ${disabled ? 'default' : 'pointer'};
    color: ${theme.palette[PColor.AccentPrimary]};
  `
);

const RadioBox = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<RadioProps>(
  ({ disabled, size = RadioSize.Sm, theme }: With<WithTheme, RadioProps>) => css`
    border-radius: 50%;
    border: 1px solid ${disabled ? theme.palette[PColor.BorderRadioDisabled] : theme.palette[PColor.BorderRadio]};

    ${sizeRadioMixin[size]}

    &::before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      display: block;
      background: ${theme.palette[PColor.TextPrimaryInvert]};
      border-radius: 50%;
      cursor: ${disabled ? 'default' : 'pointer'};
      transform: translate(-45%, -45%);
      opacity: 0;

      ${sizeInnerRadioMixin[size]}
    }

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      background: ${disabled ? theme.palette[PColor.RadioDisabled] : theme.palette[PColor.BorderActiveBottom]};
      border-radius: 50%;
      cursor: ${disabled ? 'default' : 'pointer'};
      opacity: ${disabled ? 1 : 0};
    }
  `
);

const Input = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Input'),
  type: 'radio',
})<RadioProps>(
  ({ disabled, size = RadioSize.Sm, theme }: With<WithTheme, RadioProps>) => css`
    position: absolute;
    opacity: 0;
    border: 1px solid ${theme.palette[PColor.BorderRadio]};
    border-radius: 50%;
    cursor: ${disabled ? 'default' : 'pointer'};
    margin: 0;
    z-index: 99;

    ${sizeRadioMixin[size]}

    &:hover + ${RadioBox} {
      &::before {
        opacity: ${disabled ? 0 : 1};
        background-color: ${theme.palette[PColor.RadioHover]};
      }
    }

    &:checked + ${RadioBox} {
      &::before {
        opacity: 1;
        background: ${theme.palette[PColor.TextPrimaryInvert]};
      }

      &::after {
        opacity: 1;
        background: ${disabled
          ? theme.palette[PColor.AccentSecondaryDisabled]
          : theme.palette[PColor.BorderActiveBottom]};
      }
    }
  `
);

const Styled = applyDisplayNames({ Radio, Input, RadioBox });

export default Styled;
