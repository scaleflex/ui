import { numberOfSliders } from './types';

export type NumberOfSlidersType = Values<typeof numberOfSliders>;

export type SliderValue = {
  from?: number;
  to?: number;
};

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  value: SliderValue;
  min?: number;
  max?: number;
  onChange: (value) => void;
  step?: number;
  isActive: boolean;
  annotation?: string;
  numberOfSliders?: NumberOfSlidersType;
}
