import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { WithTheme } from '@sfx-ui/theme/entity';
// import type { With } from '@sfx-ui/utils/types';
import { Color as PColor } from '@sfx-ui/utils/types/palette';
import type { SwitcherProps } from './switcher.props';

const baseClassName = 'Switcher';

const Input = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Input'),
  type: 'checkbox',
})<SwitcherProps>(
  () => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    padding: 0;
    cursor: inherit;
    z-index: 1;
  `
);

const Switcher = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    position: relative;
    display: inline-flex;
    cursor: pointer;
    color: ${palette[PColor.AccentPrimary]};
  `
);

const Styled = { Switcher, Input };

export default Styled;
