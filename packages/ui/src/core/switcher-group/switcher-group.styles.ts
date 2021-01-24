import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
// import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import type { SwitcherGroupProps } from './switcher-group.props';

const baseClassName = 'SwitcherGroup';

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
  type: 'checkbox',
})(
  ({ theme }: WithTheme) => css`
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 14px;
    margin-left: 8px;
    color: ${theme.palette[PColor.TextPrimary]};
  `
);

const SwitcherGroup = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<SwitcherGroupProps>(
  () => css`
    position: relative;
    display: inline-flex;
    cursor: pointer;
  `
);

const Styled = applyDisplayNames({ SwitcherGroup, Label });

export default Styled;
