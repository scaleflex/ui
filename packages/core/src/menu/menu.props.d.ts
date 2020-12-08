import type { PropsWithChildren } from 'react';

export interface MenuProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  fullWidth?: boolean;
  anchorElPosition?: DOMRect;
  anchorEl?: HTMLElement;
  onClose?: () => void;
  id?: string;
}
