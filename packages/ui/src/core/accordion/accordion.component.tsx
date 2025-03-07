import React, { MouseEvent } from 'react';

import type { AccordionProps } from './accordion.props';
import AccordionHeader from '../accordion-header';
import AccordionDetails from '../accordion-details';
import Styled from './accordion.styles';

const Accordion = ({
  label,
  expanded = false,
  children,
  detailStyle,
  headerStyle,
  fullWidth,
  iconProps: iconPropsData,
  onClick,
  onChange,
  onContextMenu,
  hideIcon = false,
  ref,
  ...rest
}: AccordionProps): JSX.Element => {
  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    if (typeof onChange === 'function') {
      onChange(!expanded, event);
    }

    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <Styled.Accordion ref={ref} {...rest}>
      <AccordionHeader
        label={label}
        expanded={expanded}
        style={{ ...headerStyle }}
        hideIcon={hideIcon}
        onClick={handleOnClick}
        onContextMenu={onContextMenu}
        iconProps={iconPropsData}
        fullWidth={fullWidth}
      />

      <AccordionDetails expanded={expanded} style={{ ...detailStyle }}>
        {children}
      </AccordionDetails>
    </Styled.Accordion>
  );
};

export default Accordion;
