import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
// import type { With } from '@sfx-ui/utils/types';
// import type { WithTheme } from '@sfx-ui/theme/entity';
// import { Color as PColor } from '@sfx-ui/utils/types/palette';
import type { RatingProps } from './rating.props';

const baseClassName = 'Rating';

const Rating = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<RatingProps>(
  () => css`
    display: inline-flex;
    align-items: center;
  `
);

const Item = styled.label.attrs({
  className: generateClassNames(baseClassName, 'Item'),
})(
  ({ readOnly = false }: {readOnly?: boolean}) => css`
    position: relative;
    display: inline-flex;
    margin-left: 3px;

    &:first-child {
      margin-left: 0;
    }

    ${!readOnly && css`
      cursor: pointer;
    `}

    input {
      position: absolute;
      visibility: hidden;
    }
  `
);

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  () => css`
    display: inline-flex;
  `
);

const Styled = {
  Rating,
  Item,
  Icon,
};

export default Styled;
