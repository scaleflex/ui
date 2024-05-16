import styled, { css } from 'styled-components';
import { With } from '../../utils/types';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import type { SwitcherGroupProps } from './switcher-group.props';
import { fontSizeSwitcherMixin } from '../switcher/switcher.mixin';
import { SwitcherSize } from '../switcher/switcher-size';

const baseClassName = 'SwitcherGroup';

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
  type: 'checkbox',
})<SwitcherGroupProps>(
  ({ disabled, size = SwitcherSize.Sm, theme }: With<WithTheme, SwitcherGroupProps>) => css`
    display: flex;
    align-items: center;
    margin-left: 8px;
    color: ${disabled ? theme.palette[PColor.ButtonDisabledText] : theme.palette[PColor.TextPrimary]};
    cursor: ${disabled ? 'default' : 'pointer'};

    ${fontSizeSwitcherMixin[size]};
  `
);

const SwitcherGroup = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<SwitcherGroupProps>(
  ({ disabled }: With<WithTheme, SwitcherGroupProps>) => css`
    position: relative;
    display: inline-flex;
    cursor: ${disabled ? 'default' : 'pointer'};
  `
);

const Styled = applyDisplayNames({ SwitcherGroup, Label });

export default Styled;
