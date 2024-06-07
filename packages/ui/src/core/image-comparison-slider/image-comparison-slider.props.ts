
export interface ImageComparisonSliderProps extends React.HTMLAttributes<HTMLDivElement> {
	width?: number;
	height?: number;
  leftImgProps?: { src: string, alt: string };
	rightImgProps?: { src: string, alt: string };
	handleProps?: { iconSize: number, padding: number, color: string }
	thumbIcon?: React.ReactNode;
}