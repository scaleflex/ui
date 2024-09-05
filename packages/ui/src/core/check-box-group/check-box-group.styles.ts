import styled, { css } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import type { CheckBoxSizeType } from '../check-box/check-box.props';
import { LabelPositionType } from './check-box-group.props';
import { sizeCheckboxGroupMixin } from './check-box-group.mixin';
import { Size } from '../check-box/types';
import StyledCheckbox from '../check-box/check-box.styles';

const baseClassName = 'CheckBoxGroup';

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})<With<WithTheme, { $labelPosition: LabelPositionType | undefined; disabled: boolean; size: CheckBoxSizeType }>>(
  ({ theme, $labelPosition = 'after', size = Size.Sm, disabled }) => css`
    display: inline-block;
    align-items: center;
    ${sizeCheckboxGroupMixin[size]}
    ${`margin-${$labelPosition === 'after' ? 'left' : 'right'}`}:4px;
    color: ${theme.palette[PColor.TextPrimary]};
    cursor: ${disabled ? 'default' : 'pointer'};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `
);

const CheckBoxGroup = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<{ disabled?: boolean }>(
  ({ disabled }) => css`
    position: relative;
    display: inline-flex;
    column-gap: 4px;
    align-items: center;
    max-width: 100%;
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
