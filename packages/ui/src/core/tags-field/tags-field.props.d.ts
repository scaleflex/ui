export interface TagsFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: string[];
  suggestedTags:string[];
  onAdd: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove : (tags : string[]) => void;
}
