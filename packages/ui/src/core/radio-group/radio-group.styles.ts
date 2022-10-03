import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import type { RadioGroupProps } from './radio-group.props';
import { fontSizeRadioLabelMixin } from '../radio/radio.mixin';
import { RadioSize } from '../radio/size';

const baseClassName = 'RadioGroup';

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
  type: 'checkbox',
})(
  ({ size = RadioSize.Sm, disabled, theme }: With<WithTheme, RadioGroupProps>) => css`
    display: flex;
    align-items: center;
    margin-left: 8px;
    cursor: ${disabled ? 'default' : 'pointer'};
    color: ${disabled ? theme.palette[PColor.ButtonDisabledText] : theme.palette[PColor.TextPrimary]};

    ${fontSizeRadioLabelMixin[size]}
  `
);

const RadioGroup = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<RadioGroupProps>(
  ({ disabled }: With<WithTheme, RadioGroupProps>) => css`
    position: relative;
    display: inline-flex;
    cursor: ${disabled ? 'default' : 'pointer'};
  `
);

const Styled = applyDisplayNames({ RadioGroup, Label });

export default Styled;
