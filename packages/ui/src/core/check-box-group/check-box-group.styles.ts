import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import type { CheckBoxGroupProps } from './check-box-group.props';
import { LabelPositionType } from './check-box-group.props';

const baseClassName = 'CheckBoxGroup';

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
  type: 'checkbox',
})(
  ({
    theme,
    labelPosition = 'after',
    disabled,
  }: With<WithTheme, { labelPosition: LabelPositionType | undefined; disabled: boolean }>) => css`
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 14px;
    ${`margin-${labelPosition === 'after' ? 'left' : 'right'}`}:8px;
    color: ${disabled ? theme.palette[PColor.ButtonDisabledText] : theme.palette[PColor.TextPrimary]};
  `
);

const CheckBoxGroup = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<CheckBoxGroupProps>(
  () => css`
    position: relative;
    display: inline-flex;
    cursor: pointer;
  `
);

const Styled = applyDisplayNames({ CheckBoxGroup, Label });

export default Styled;
