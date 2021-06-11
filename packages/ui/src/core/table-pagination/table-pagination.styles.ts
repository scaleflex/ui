import styled, { css } from 'styled-components';
// import { With } from '@scaleflex/ui/utils/types';
import { Color as PC } from '@scaleflex/ui/utils/types/palette';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';

const baseClassName = 'TablePagination';

const TablePagination = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;
  `
);
const Section = styled.div.attrs({
  className: generateClassNames(baseClassName, 'section'),
})(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
);

const ShowPages = styled.label.attrs({
  className: generateClassNames(baseClassName, 'label'),
})(
  () => css`
    margin-right: 24px;
  `
);

const Amount = styled.div.attrs({
  className: generateClassNames(baseClassName, 'amount'),
})``;

const WeightedText = styled.span.attrs({
  className: generateClassNames(baseClassName, 'weighted-text'),
})(
  ({ theme }: WithTheme) => css`
    font-weight: 700;
    color: ${theme.palette[PC.TextPrimary]};
  `
);

const Styled = applyDisplayNames({
  TablePagination,
  ShowPages,
  Amount,
  Section,
  WeightedText,
});

export default Styled;
