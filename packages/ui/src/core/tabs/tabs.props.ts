import React from 'react';

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children?: React.DetailedReactHTMLElement<any, HTMLElement> | React.ReactNode;
  value?: string | number;
  onChange?: (value: string | number) => void;
  ref?: React.Ref<HTMLDivElement>;
}
