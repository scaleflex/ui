import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import ArrowTick from '../arrow-tick';
import { Type as ArrowTickType } from '../arrow-tick/types';
import type { AccordionHeaderProps } from './accordion-header.props';
import Styled from './accordion-header.styles';

const AccordionHeader = intrinsicComponent<AccordionHeaderProps, HTMLDivElement>((
  {
    open, label, onChange, onClick, ...rest
  }: AccordionHeaderProps,
  ref
): JSX.Element => (
  <Styled.AccordionHeader
    ref={ref}
    onClick={(event) => {
      if (typeof onChange === 'function') {
        onChange(!open);
      }

      if (typeof onClick === 'function') {
        onClick(event);
      }
    }}
    {...rest}
  >
    <Styled.Icon>
      <ArrowTick type={open ? ArrowTickType.Bottom : ArrowTickType.Right} />
    </Styled.Icon>

    <Styled.Label>{label}</Styled.Label>
  </Styled.AccordionHeader>
));

AccordionHeader.defaultProps = {
  open: false,
};

AccordionHeader.propTypes = {
  label: PT.string.isRequired,
  open: PT.bool,
  onChange: PT.func,
};

export default AccordionHeader;
