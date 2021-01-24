import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { TabProps } from './tab.props';
import { Size } from './types';
import Styled from './tab.styles';

const Tab = intrinsicComponent<TabProps, HTMLDivElement>((
  {
    icon, label, value, active, className, size = Size.Md, ...rest
  }: TabProps,
  ref
): JSX.Element => (
  <Styled.Tab
    ref={ref}
    size={size}
    {...rest}
    className={`${className}${active ? ' active' : ''}`}
  >
    {icon && <Styled.Icon size={size}>{icon}</Styled.Icon>}
    {label && <Styled.Label>{label}</Styled.Label>}
  </Styled.Tab>
));

Tab.defaultProps = {
  size: Size.Md,
};

Tab.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  icon: PT.node,
  label: PT.node,
  value: PT.oneOfType([PT.number, PT.string]),
  active: PT.bool,
};

Tab.displayName = 'Tab';

export default Tab;
