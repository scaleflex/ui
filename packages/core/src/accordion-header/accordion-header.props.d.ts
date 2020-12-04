export interface AccordionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  open?: boolean;
  onChange?: (value: boolean) => void;
}
