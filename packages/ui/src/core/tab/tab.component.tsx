import React from 'react';
import Dot from '@scaleflex/icons/dot';

import type { TabProps } from './tab.props';
import { Size } from './types';
import Badge from '../badge';
import Styled from './tab.styles';

const Tab = ({
  icon = false,
  label,
  badge,
  active,
  disabled,
  notification,
  className,
  size = Size.Md,
  ref,
  ...rest
}: TabProps): JSX.Element => (
  <Styled.Tab
    ref={ref}
    size={size}
    icon={icon}
    disabled={disabled}
    {...rest}
    className={`${className}${active ? ' active' : ''}`}
  >
    <Styled.Icons>
      {icon && (
        <Styled.Icon disabled={disabled} size={size}>
          {icon}
        </Styled.Icon>
      )}
      {notification && !disabled && (
        <Styled.Dot>
          <Dot color={notification} />
        </Styled.Dot>
      )}
    </Styled.Icons>
    {label && <Styled.Label>{label}</Styled.Label>}
    {badge && !disabled && (
      <Styled.Badge>
        <Badge inline size={14} fontSize={10} padding="0 1px" badgeContent={badge} />
      </Styled.Badge>
    )}
  </Styled.Tab>
);

export default Tab;
