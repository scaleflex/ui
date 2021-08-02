export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  expanded?: boolean;
  detailStyle?: object;
  headerStyle?: object;
  onChange?: (value: boolean, event: any) => void;
  onContextMenu?: (event: any) => void;
}
