export interface RatingProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: number;
  name?: string;
  readOnly?: boolean;
}

export interface RatingItemReadOnlyProps extends React.HTMLAttributes<HTMLSpanElement> {
  mark: number;
  value: number;
  active: boolean;
}

export interface RatingItemProps extends RatingItemReadOnlyProps {
  name: string;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
}
