import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import type { TabsProps } from './tabs.props';
import Styled from './tabs.styles';

const Tabs = intrinsicComponent<TabsProps, HTMLDivElement>((
  {
    children, value, onChange, ...rest
  }: TabsProps,
  ref
): JSX.Element => (
  <Styled.Tabs ref={ref} {...rest}>
    {React.Children.map(children, (child, index) => {
      const childValue = child.props.value || index;
      const active = value === childValue;

      return React.cloneElement(
        child,
        {
          onClick: (event: any) => {
            if (typeof onChange === 'function' && !active) {
              onChange(childValue);
            }

            if (typeof child.props.onClick === 'function') {
              child.props.onClick(event);
            }
          },

          ...(
            child?.type?.displayName === 'Tab' || child?.type?.name === 'Tab' ? { active } : {}
          )
        }
      );
    })}
  </Styled.Tabs>
));

Tabs.propTypes = {
  value: PT.oneOfType([PT.string, PT.number]),
  onChange: PT.func,
  children: PT.node,
};

export default Tabs;
