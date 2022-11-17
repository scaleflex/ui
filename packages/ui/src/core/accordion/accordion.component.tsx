import React from 'react';
import PT, { Validator } from 'prop-types';
import type { IconProps } from '@scaleflex/icons/icon.props';
import { iconPropTypes } from '@scaleflex/icons/icon.prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { AccordionProps } from './accordion.props';
import AccordionHeader from '../accordion-header';
import AccordionDetails from '../accordion-details';
import Styled from './accordion.styles';

const Accordion = intrinsicComponent<AccordionProps, HTMLDivElement>(
  (
    {
      label,
      expanded,
      children,
      detailStyle,
      headerStyle,
      fullWidth,
      iconProps: iconPropsData,
      onClick,
      onChange,
      onContextMenu,
      hideIcon,
      ...rest
    }: AccordionProps,
    ref
  ): JSX.Element => {
    return (
      <Styled.Accordion ref={ref} {...rest}>
        <AccordionHeader
          label={label}
          expanded={expanded}
          style={{ ...headerStyle }}
          hideIcon={hideIcon}
          onClick={(event) => {
            if (typeof onChange === 'function') {
              onChange(!expanded, event);
            }

            if (typeof onClick === 'function') {
              onClick(event);
            }
          }}
          onContextMenu={onContextMenu}
          iconProps={iconPropsData}
          fullWidth={fullWidth}
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
  hideIcon: false,
};

Accordion.propTypes = {
  label: PT.node.isRequired,
  expanded: PT.bool,
  detailStyle: PT.object,
  headerStyle: PT.object,
  onChange: PT.func,
  onContextMenu: PT.func,
  hideIcon: PT.bool,
  fullWidth: PT.bool,
  iconProps: PT.exact(iconPropTypes) as Validator<IconProps>,
};

export default Accordion;
