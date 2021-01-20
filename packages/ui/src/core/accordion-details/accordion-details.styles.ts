import styled, { css } from 'styled-components';
import { generateClassNames } from '../../utils/functions';
import type { AccordionDetailsProps } from './accordion-details.props';

const baseClassName = 'AccordionDetails';

const AccordionDetails = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ expanded }: AccordionDetailsProps) => css`
    visibility: ${expanded ? 'visible' : 'hidden'};
    margin: 16px 0;
  `
);

const Styled = { AccordionDetails };

export default Styled;
