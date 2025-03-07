import React from 'react';

export interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  ref?: React.Ref<HTMLTableSectionElement>;
}
