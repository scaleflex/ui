import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import type { CheckBoxGroupProps } from './check-box-group.props';
import type { CheckBoxSizeType } from '../check-box/check-box.props';
import { LabelPositionType } from './check-box-group.props';
import { sizeCheckboxGroupMixin } from './check-box-group.mixin';
import { Size } from '../check-box/types';
import StyledCheckbox from '../check-box/check-box.styles';

const baseClassName = 'CheckBoxGroup';

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
  type: 'checkbox',
})(
  ({
    theme,
    labelPosition = 'after',
    size = Size.Sm,
    disabled,
  }: With<
    WithTheme,
    { labelPosition: LabelPositionType | undefined; disabled: boolean; size: CheckBoxSizeType }
  >) => css`
    display: flex;
    align-items: center;
    ${sizeCheckboxGroupMixin[size]}
    ${`margin-${labelPosition === 'after' ? 'left' : 'right'}`}:4px;
    color: ${disabled ? theme.palette[PColor.ButtonDisabledText] : theme.palette[PColor.TextPrimary]};
    cursor: ${disabled ? 'default' : 'pointer'};
  `
);

const CheckBoxGroup = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<CheckBoxGroupProps>(
  ({ disabled }: With<WithTheme, CheckBoxGroupProps>) => css`
    position: relative;
    display: inline-flex;
    column-gap: 4px;
    align-items: center;
    cursor: ${disabled ? 'default' : 'pointer'};

    &:hover {
      ${StyledCheckbox.UnCheckedIcon} {
        ${!disabled &&
        css`
          display: flex;
        `}
      }
    }
  `
);

const Styled = applyDisplayNames({ CheckBoxGroup, Label });

export default Styled;
