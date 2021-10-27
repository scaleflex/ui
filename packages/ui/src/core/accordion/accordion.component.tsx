import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { AccordionProps } from './accordion.props';
import AccordionHeader from '../accordion-header';
import AccordionDetails from '../accordion-details';
import Styled from './accordion.styles';

const Accordion = intrinsicComponent<AccordionProps, HTMLDivElement>(
  (
    { label, expanded, children, detailStyle, headerStyle, onClick, onChange, onContextMenu, ...rest }: AccordionProps,
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
          onContextMenu={onContextMenu}
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
  label: PT.node.isRequired,
  expanded: PT.bool,
  // eslint-disable-next-line react/forbid-prop-types
  detailStyle: PT.object,
  // eslint-disable-next-line react/forbid-prop-types
  headerStyle: PT.object,
  onChange: PT.func,
  onContextMenu: PT.func,
};

export default Accordion;
