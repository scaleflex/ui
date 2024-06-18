import type { PropsWithChildren } from 'react';

import { Position } from '../popper/types';
import { Values } from '../../utils/types';
import type { PopperOptions } from '../popper/popper.props';

export type PopperPositionType = Values<typeof Position>;

export type AnchorElType = Element | null | undefined;

export interface MenuProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  anchorElPosition?: DOMRect;
  anchorEl?: AnchorElType;
  onClose?: (event: React.MouseEvent<HTMLDivElement>) => void;
  containerProps?: object;
  alignCenter?: boolean;
  maxHeight?: string | number;
  position?: PopperPositionType;
  popperOptions?: PopperOptions;
  enableOverlay?: boolean;
  zIndex?: number;
  hideScroll?: boolean;
  scroll?: boolean;
  enableUnderlayingEvent?: boolean;
  popperWrapperStyles?: React.CSSProperties;
  style?: React.CSSProperties;
  list?: object;
}
