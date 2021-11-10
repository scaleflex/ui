import type { SelectSimpleValueType } from '../select/select.props';

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

export interface HueBarProps extends React.HTMLAttributes<HTMLDivElement> {
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

export interface ColorPickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: ColorType;
  setColor: (color: ColorType) => void;
  setPinnedColors: (pinnedColors: Array<string>) => void;
  squareSize?: number;
  pinnedColors: Array<string>;
}
