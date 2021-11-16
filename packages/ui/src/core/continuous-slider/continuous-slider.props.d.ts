export interface ContinuousSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  start?: number;
  end?: number;
  onChange?: (value) => void;
  onDragStart?: (value) => void;
  onDragEnd?: (value) => void;
  step?: number;
  annotation?: string;
  showAnntotaionTooltip?: boolean;
  hideOverlay?: boolean;
}
