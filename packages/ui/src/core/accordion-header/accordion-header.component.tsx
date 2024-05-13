import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import ArrowTick from '../arrow-tick';
import { Position as ArrowTickType } from '../../utils/types';
import type { AccordionHeaderProps } from './accordion-header.props';
import Styled from './accordion-header.styles';

const AccordionHeader = intrinsicComponent<AccordionHeaderProps, HTMLDivElement>(
  (
    {
      expanded = false,
      label,
      onChange,
      onClick,
      onContextMenu,
      hideIcon = false,
      fullWidth = false,
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
      $fullWidth={fullWidth}
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

export default AccordionHeader;
