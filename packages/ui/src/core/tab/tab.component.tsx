import React from 'react';
import PT from 'prop-types';
import Dot from '@scaleflex/icons/dot';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { TabProps } from './tab.props';
import { Size } from './types';
import Badge from '../badge';
import Styled from './tab.styles';

const Tab = intrinsicComponent<TabProps, HTMLDivElement>(
  (
    { icon = false, label, badge, value, active, disabled, notification, className, size = Size.Md, ...rest }: TabProps,
    ref
  ): JSX.Element => (
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
  )
);

Tab.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  icon: PT.node,
  label: PT.node,
  value: PT.oneOfType([PT.number, PT.string]),
  active: PT.bool,
  notification: PT.string,
};

Tab.displayName = 'Tab';

export default Tab;
