import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { AccordionProps } from './accordion.props';
import AccordionHeader from '../accordion-header';
import AccordionDetails from '../accordion-details';
import Styled from './accordion.styles';

const Accordion = intrinsicComponent<AccordionProps, HTMLDivElement>(
  (
    { label, expanded, children, onClick, onChange, detailStyle, headerStyle, ...rest }: AccordionProps,
    ref
  ): JSX.Element => {
    return (
      <Styled.Accordion ref={ref} {...rest}>
        <AccordionHeader
          label={label}
          expanded={expanded}
          style={{ ...headerStyle }}
          onClick={(event) => {
            if (typeof onChange === 'function') {
              onChange(!expanded, event);
            }

            if (typeof onClick === 'function') {
              onClick(event);
            }
          }}
        />

        <AccordionDetails expanded={expanded} style={{ ...detailStyle }}>
          {children}
        </AccordionDetails>
      </Styled.Accordion>
    );
  }
);

Accordion.defaultProps = {
  expanded: false,
};

Accordion.propTypes = {
  label: PT.string.isRequired,
  expanded: PT.bool,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  detailStyle: PT.object,
  // eslint-disable-next-line react/forbid-prop-types
  headerStyle: PT.object,
};

export default Accordion;
