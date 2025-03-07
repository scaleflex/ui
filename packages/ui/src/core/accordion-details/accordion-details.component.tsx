import React from 'react';

import type { AccordionDetailsProps } from './accordion-details.props';
import Styled from './accordion-details.styles';

const AccordionDetails = ({ expanded = false, children, ref, ...rest }: AccordionDetailsProps): JSX.Element => (
  <>
    {expanded && (
      <Styled.AccordionDetails ref={ref} {...rest}>
        {children}
      </Styled.AccordionDetails>
    )}
  </>
);

export default AccordionDetails;
