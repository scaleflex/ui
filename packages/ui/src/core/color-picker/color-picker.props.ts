import type { SelectSimpleValueType } from '../select/select.props';
import type { MenuProps } from '../menu';

export interface ColorType {
  hue: number;
  inputType: SelectSimpleValueType | SelectSimpleValueType[];
  hexValue: string;
  rgbValue: number[];
  circleSquarePos: number[];
  circleBarPos: number;
}

export interface ColorItemProps {
  value: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: number;
}

export interface HueBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange: (hue: number, pos: number) => void;
  reviewRef: HTMLDivElement | null;
  hueWidth: number;
  sliderPos: number;
}

export interface SquareColorProps {
  onChange: (hex: string, rgb: number[], pos: number[]) => void;
  reviewRef: HTMLDivElement | null;
  squareSize: number;
  color: ColorType;
}

export interface ColorPickerProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
  defaultColor?: string;
  onChange?: (hexColor: string, rgb?: string, pinnedColors?: Array<string>) => void;
  pinnedColors?: Array<string>;
  showTransparentColor?: boolean;
  hidePinIcon?: boolean;
  containerProps?: Omit<MenuProps, 'open'>;
  MenuProps?: Omit<MenuProps, 'open'>;
}
