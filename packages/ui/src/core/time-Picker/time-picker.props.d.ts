import type { Values } from '../../utils/types';
import type { InputProps } from '../input';
import { InputGroupProps } from '../input-group';
import { PopperOptions } from '../popper/popper.props';
import { Position } from '../popper/types';

export type PopperPositionType = Values<typeof Position>;

export interface TimePickerProps extends Omit<InputGroupProps, 'onChange'> {
  position?: PopperPositionType;
  popperOptions?: PopperOptions;
  fullWidth?: boolean;
  InputProps?: InputProps;
  inputGroupProps?: InputProps;
  selected?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}
