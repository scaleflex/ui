export interface AccordionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  expanded?: boolean;
  onChange?: (value: boolean) => void;
}
