import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { AccordionProps } from './accordion.props';
import AccordionHeader from '../accordion-header';
import AccordionDetails from '../accordion-details';
import Styled from './accordion.styles';

const Accordion = intrinsicComponent<AccordionProps, HTMLDivElement>((
  {
    label, expanded, children, onClick, onChange, ...rest
  } : AccordionProps,
  ref
): JSX.Element => (
  <Styled.Accordion ref={ref} {...rest}>
    <AccordionHeader
      label={label}
      expanded={expanded}
      onClick={(event) => {
        if (typeof onChange === 'function') {
          onChange(!expanded);
        }

        if (typeof onClick === 'function') {
          onClick(event);
        }
      }}
    />

    <AccordionDetails expanded={expanded}>
      {children}
    </AccordionDetails>

  </Styled.Accordion>

));

Accordion.defaultProps = {
  expanded: false,
};

Accordion.propTypes = {
  label: PT.string.isRequired,
  expanded: PT.bool,
  onChange: PT.func,
};

export default Accordion;
