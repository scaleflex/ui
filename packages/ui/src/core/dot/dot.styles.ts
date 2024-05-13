import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';

const baseClassName = 'Dot';
const transitionDuration = 100;

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})<With<WithTheme, { $visible: boolean; $on?: boolean }>>(
  ({ $visible = false, $on = false, theme: { palette } }) => css`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: opacity ${transitionDuration}ms ease-out;
    opacity: ${$visible ? 1 : 0};
    color: ${palette[$on ? PColor.AccentPrimary : PColor.BordersStrong]};
  `
);

const Dot = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<WithTheme, { $active: boolean }>>(
  ({ $active = false, theme }) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 6px;
    height: 6px;
    transition: background-color ${transitionDuration}ms ease-out;

    border: 1px solid transparent;
    border-radius: 50%;

    ${$active && `background-color: ${theme.palette[PColor.AccentPrimary]}`};
  `
);

const Styled = applyDisplayNames({ Dot, Icon });

export default Styled;
