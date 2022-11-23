import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import type { CheckBoxProps } from './check-box.props';
import { sizeCheckboxMixin } from './check-box.mixin';
import { Size } from './types';

const baseClassName = 'CheckBox';

const Input = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Input'),
  type: 'checkbox',
})<CheckBoxProps>(
  ({ disabled = false }: With<WithTheme, CheckBoxProps>) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    padding: 0;
    cursor: ${disabled ? 'default' : 'pointer'};
    z-index: 1;
  `
);

const UnCheckedIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'icon'),
})<CheckBoxProps>(
  () => css`
    display: flex;
    opacity: 0;
    transition: all 100ms ease-out;
  `
);

const CheckBox = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<CheckBoxProps>(
  ({ theme: { palette }, size = Size.Sm, checked, disabled = false }: With<WithTheme, CheckBoxProps>) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${checked ? palette[PColor.AccentPrimary] : palette[PColor.BackgroundStateless]};
    border: 1px solid ${checked ? palette[PColor.AccentPrimary] : palette[PColor.BackgroundPrimaryStateless]};
    border-radius: 1px;
    outline: none;
    text-align: center;
    transition: all 100ms ease-out;
    cursor: ${disabled ? 'default' : 'pointer'};

    ${sizeCheckboxMixin[size]}

    &:hover {
      ${UnCheckedIcon} {
        ${!disabled &&
        css`
          opacity: 1;
        `}
      }
    }

    ${disabled &&
    css`
      background: ${checked ? palette[PColor.BackgroundGrey] : palette[PColor.BackgroundActive]};
      border: 1px solid ${checked ? palette[PColor.BackgroundGrey] : palette[PColor.BordersSecondary]};
    `}
  `
);

const Styled = applyDisplayNames({ CheckBox, Input, UnCheckedIcon });

export default Styled;
