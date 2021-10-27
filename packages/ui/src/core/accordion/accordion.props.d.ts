import React, { SyntheticEvent, MouseEvent } from 'react';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  expanded?: boolean;
  detailStyle?: object;
  headerStyle?: object;
  onChange?: (value: boolean, event: SyntheticEvent) => void;
  onContextMenu?: (event: MouseEvent) => void;
}
