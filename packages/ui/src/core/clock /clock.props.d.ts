import type { Values } from '../../utils/types';
import { Position } from '../popper/types';

export type AnchorElType = Element | null | undefined;

export type PopperPositionType = Values<typeof Position>;

export interface ClockProps {
  value?: string;
  open?: boolean;
  scroll?: boolean;
  active?: boolean;
  clockStyles?: object;
  anchorEl?: AnchorElType;
  position?: PopperPositionType;
  popperOptions?: PopperOptions;
  onChange?: (value: string) => void;
  setOpen?: (value: boolean) => void;
}
