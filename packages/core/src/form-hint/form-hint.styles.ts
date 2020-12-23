import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { WithTheme } from '@sfx-ui/theme/entity';
import type { With } from '@sfx-ui/utils/types';
import { Color as PColor } from '@sfx-ui/utils/types/palette';
import type { FormHintProps } from './form-hint.props';

const baseClassName = 'FormHint';

const FormHint = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<FormHintProps>(
  ({ error = false, theme }: With<WithTheme, FormHintProps>) => css`
    display: flex;
    align-items: center;
    margin-top: 2px;
    font-size: 10px;
    line-height: 12px;
    color: ${error ? theme.palette[PColor.Error] : theme.palette[PColor.TextSecondary]};
  `
);

const Styled = { FormHint };

export default Styled;
