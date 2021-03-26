import type { LabelProps } from '../label';

export type TagObjectTypes =
  | {
      id: string;
      label: string;
    }
  | null
  | undefined;
export interface TagFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: (string | TagObjectTypes)[];
  suggestedTags: string[];
  onAdd: (tags: (string | TagObjectTypes)[]) => void;
  onRemove: (tags: (string | TagObjectTypes)[]) => void;
  fullWidth?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  label?: React.ReactNode;
  LabelProps?: LabelProps;
  hint?: React.ReactNode;
  error?: boolean;
  loading?: boolean;
}
