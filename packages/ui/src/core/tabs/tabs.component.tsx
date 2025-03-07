import React from 'react';

import type { TabsProps } from './tabs.props';
import Styled from './tabs.styles';

const Tabs = ({ children, value, onChange, ref, ...rest }: TabsProps): JSX.Element => (
  <Styled.Tabs ref={ref} {...rest}>
    {React.Children.map(children, (child: any, index) => {
      const childValue = child?.props.value || index;
      const active = value === childValue;

      return React.cloneElement(child, {
        onClick: (event: any) => {
          if (typeof onChange === 'function' && !active) {
            onChange(childValue);
          }

          if (typeof child?.props.onClick === 'function') {
            child?.props.onClick(event);
          }
        },
        ...(child?.type?.displayName === 'Tab' || child?.type?.name === 'Tab' ? { active } : {}),
      });
    })}
  </Styled.Tabs>
);

export default Tabs;
