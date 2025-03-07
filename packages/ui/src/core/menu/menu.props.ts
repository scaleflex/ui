import type { PropsWithChildren, Ref } from 'react';

import { Position } from '../popper/types';
import { Values } from '../../utils/types';
import type { PopperOptions } from '../popper/popper.props';

export type PopperPositionType = Values<typeof Position>;

export type AnchorElType = Element | null | undefined;

export interface MenuProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  anchorEl?: AnchorElType;
  containerProps?: object;
  maxHeight?: string | number;
  position?: PopperPositionType;
  popperOptions?: PopperOptions;
  popperWrapperStyles?: React.CSSProperties;
  enableOverlay?: boolean;
  enableUnderlayingEvent?: boolean;
  zIndex?: number;
  hideScroll?: boolean;
  onClose?: (event: React.MouseEvent<HTMLDivElement>) => void;
  ref?: Ref<HTMLDivElement>;
}
