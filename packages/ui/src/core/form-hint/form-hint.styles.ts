import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import type { FormHintProps } from './form-hint.props';

const baseClassName = 'FormHint';

const FormHint = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<FormHintProps>(
  ({ error = false, theme }: With<WithTheme, FormHintProps>) => css`
    display: flex;
    align-items: center;
    font-size: 10px;
    line-height: 12px;
    color: ${error ? theme.palette[PColor.Error] : theme.palette[PColor.TextSecondary]};
  `
);

const Styled = applyDisplayNames({ FormHint });

export default Styled;
