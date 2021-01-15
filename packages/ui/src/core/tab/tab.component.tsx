import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import type { TabProps } from './tab.props';
import Styled from './tab.styles';

const Tab = intrinsicComponent<TabProps, HTMLDivElement>((
  {
    icon, label, value, active, className, ...rest
  }: TabProps,
  ref
): JSX.Element => (
  <Styled.Tab
    ref={ref}
    {...rest}
    className={`${className}${active ? ' active' : ''}`}
  >
    <Styled.Tab {...rest} className={`${className}${active ? ' active' : ''}`}>
      {icon && <Styled.Icon>{icon}</Styled.Icon>}
      {label && <Styled.Label>{label}</Styled.Label>}
    </Styled.Tab>
  </Styled.Tab>
));

Tab.propTypes = {
  icon: PT.node,
  label: PT.node,
  value: PT.oneOfType([PT.number, PT.string]),
  active: PT.bool,
};

Tab.displayName = 'Tab';

export default Tab;
