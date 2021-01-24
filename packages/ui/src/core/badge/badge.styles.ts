import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { BadgeProps } from './badge.props';
import { colorBadgeMixin } from './badge.mixin';

const baseClassName = 'Badge';

const BadgeRoot = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<BadgeProps>`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  vertical-align: middle
`;

const defaultSize = 20;

const Badge = styled.span.attrs({ className: generateClassNames(baseClassName) })<BadgeProps>(
  ({
    size, color = 'secondary', fontSize = '0.75rem', padding = '0 6px', inline
  }) => css`
    ${inline ? '' : 'position: absolute;'}
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: ${size || defaultSize}px;
    min-width: ${size || defaultSize}px;
    line-height: 1;
    padding: ${typeof padding === 'number' ? `${padding}px` : padding};
    font-size: ${typeof fontSize === 'number' ? `${fontSize}px` : fontSize};
    box-sizing: border-box;
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: ${(size || defaultSize) / 2}px;
    z-index: 1;

    ${colorBadgeMixin[color]}
  `
);

const Styled = applyDisplayNames({
  BadgeRoot,
  Badge
});

export default Styled;
