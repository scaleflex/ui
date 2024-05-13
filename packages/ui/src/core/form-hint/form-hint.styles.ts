import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { InputSize, With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import { sizeHintMixin } from './form-hint.mixin';
import { InputSizeType } from '../input/input.props';

const baseClassName = 'FormHint';

const FormHint = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<WithTheme, { size?: InputSizeType; $error: boolean; disabled?: boolean }>>(
  ({ size = InputSize.Md, $error = false, disabled = false, theme }) => css`
    display: flex;
    align-items: center;
    color: ${$error ? theme.palette[PColor.Error] : theme.palette[PColor.TextSecondary]};

    ${disabled &&
    css`
      color: ${theme.palette[PColor.ButtonDisabledText]};
    `}

    ${sizeHintMixin[size]}
  `
);

const Styled = applyDisplayNames({ FormHint });

export default Styled;
