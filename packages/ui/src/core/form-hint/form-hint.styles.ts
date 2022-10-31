import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { InputSize, With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import type { FormHintProps } from './form-hint.props';
import { sizeHintMixin } from './form-hint.mixin';

const baseClassName = 'FormHint';

const FormHint = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<FormHintProps>(
  ({ size = InputSize.Md, error = false, disabled = false, theme }: With<WithTheme, FormHintProps>) => css`
    display: flex;
    align-items: center;
    color: ${error ? theme.palette[PColor.Error] : theme.palette[PColor.TextSecondary]};

    ${disabled && css`
      color: ${theme.palette[PColor.ButtonDisabledText]};
    `}

    ${sizeHintMixin[size]}
  `
);

const Styled = applyDisplayNames({ FormHint });

export default Styled;
