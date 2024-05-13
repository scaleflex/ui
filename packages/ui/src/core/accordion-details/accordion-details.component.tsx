import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { AccordionDetailsProps } from './accordion-details.props';
import Styled from './accordion-details.styles';

const AccordionDetails = intrinsicComponent<AccordionDetailsProps, HTMLDivElement>(
  ({ expanded = false, children, ...rest }: AccordionDetailsProps, ref): JSX.Element => (
    <>
      {expanded && (
        <Styled.AccordionDetails ref={ref} {...rest}>
          {children}
        </Styled.AccordionDetails>
      )}
    </>
  )
);

AccordionDetails.propTypes = {
  expanded: PT.bool,
};

export default AccordionDetails;
