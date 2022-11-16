import React from 'react';
import PT, { Validator } from 'prop-types';
import type { IconProps } from '@scaleflex/icons/icon.props';
import { iconPropTypes } from '@scaleflex/icons/icon.prop-types';

import { intrinsicComponent } from '../../utils/functions';
import ArrowTick from '../arrow-tick';
import { Position as ArrowTickType } from '../../utils/types';
import type { AccordionHeaderProps } from './accordion-header.props';
import Styled from './accordion-header.styles';

const AccordionHeader = intrinsicComponent<AccordionHeaderProps, HTMLDivElement>(
  (
    {
      expanded,
      label,
      onChange,
      onClick,
      onContextMenu,
      hideIcon,
      fullWidth,
      iconProps: iconPropsData,
      ...rest
    }: AccordionHeaderProps,
    ref
  ): JSX.Element => (
    <Styled.Header
      ref={ref}
      onClick={(event) => {
        if (typeof onChange === 'function') {
          onChange(!expanded);
        }

        if (typeof onClick === 'function') {
          onClick(event);
        }
      }}
      fullWidth={fullWidth}
      {...rest}
    >
      <Styled.Label onContextMenu={onContextMenu}>{label}</Styled.Label>
      {!hideIcon && (
        <Styled.Icon onContextMenu={onContextMenu}>
          <ArrowTick
            type={expanded ? ArrowTickType.Top : ArrowTickType.Bottom}
            IconProps={{ size: 11, ...iconPropsData }}
          />
        </Styled.Icon>
      )}
    </Styled.Header>
  )
);

AccordionHeader.defaultProps = {
  expanded: false,
  hideIcon: false,
  fullWidth: false,
};

AccordionHeader.propTypes = {
  label: PT.node.isRequired,
  expanded: PT.bool,
  hideIcon: PT.bool,
  fullWidth: PT.bool,
  onChange: PT.func,
  iconProps: PT.exact(iconPropTypes) as Validator<IconProps>,
};

export default AccordionHeader;
