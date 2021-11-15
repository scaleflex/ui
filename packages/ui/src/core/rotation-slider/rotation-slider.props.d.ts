export interface RotationSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  start?: number;
  end?: number;
  onChange?: (value) => void;
  step?: number;
  isActive?: boolean;
  showAnntotaionTooltip?: boolean;
  annotation?: string;
}
