import React, { isValidElement } from 'react';

export const isValidSingleFragmentChildren = (children?: any): boolean =>
  children &&
  isValidElement(children) &&
  React.Children.count(children) === 1 &&
  (children as JSX.Element).type === React.Fragment;
