import type { PropsWithChildren } from 'react';

export type AnchorElType = Element | null | undefined;

export interface MenuProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  fullWidth?: boolean;
  anchorElPosition?: DOMRect;
  anchorEl?: AnchorElType;
  onClose?: () => void;
  id?: string;
}
