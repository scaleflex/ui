import type { PropsWithChildren } from 'react';

export interface MenuProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  fullWidth?: boolean;
  anchorElPosition?: DOMRect;
  anchorEl?: Element;
  onClose?: () => void;
  id?: string;
}
