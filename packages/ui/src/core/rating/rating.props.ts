import { FormEvent } from 'react';

export interface RatingProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: number;
  name?: string;
  readOnly?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

export interface RatingItemReadOnlyProps extends React.HTMLAttributes<HTMLSpanElement> {
  mark: number;
  value: number;
  active: boolean;
  ref?: React.Ref<HTMLSpanElement>;
}

export interface RatingItemProps extends RatingItemReadOnlyProps {
  name: string;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLSpanElement>;
}
