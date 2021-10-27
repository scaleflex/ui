export interface AccordionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  expanded?: boolean;
  onChange?: (value: boolean) => void;
}
