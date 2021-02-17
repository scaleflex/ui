export interface TagFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: string[];
  suggestedTags:string[];
  onAdd: (tags : string[]) => void;
  onRemove : (tags : string[]) => void;
}
