export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  expanded?: boolean;
  onChange?: (value: boolean, event: any) => void;
}
