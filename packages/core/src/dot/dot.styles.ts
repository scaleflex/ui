import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
// import { Color as PColor } from '@sfx-ui/utils/types/palette';
import type { DotProps } from './dot.props';
import { activeDotMixin } from './dot.mixin';

const baseClassName = 'Dot';
const transitionDuration = 0.3;

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ visible = false }: {visible: boolean}) => css`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: opacity ${transitionDuration}s;
    opacity: ${visible ? 1 : 0};
  `
);

const Dot = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ active = false }: With<WithTheme, DotProps>) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 6px;
    height: 6px;
    transition: background-color ${transitionDuration}s ease;

    border: 1px solid transparent;
    border-radius: 50%;

    ${active && activeDotMixin}
  `
);

const Styled = { Dot, Icon };

export default Styled;
