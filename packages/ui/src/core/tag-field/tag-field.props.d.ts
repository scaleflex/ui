import type { LabelProps } from '../label';

export interface TagFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: string[];
  suggestedTags: string[];
  onAdd: (tags: string[]) => void;
  onRemove: (tags: string[]) => void;
  fullWidth?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  label?: React.ReactNode;
  LabelProps?: LabelProps;
  hint?: React.ReactNode;
  error?: boolean;
  loading?: boolean;
}
