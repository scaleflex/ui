export interface ImageComparisonSliderProps extends React.HTMLAttributes<HTMLDivElement> {
	width?: string;
	height?: string;
  leftImgSrc?: string;
	rightImgSrc?: string;
	leftImgAlt?: string;
	handleIcon?: React.ReactNode;
	iconSize?: number;
	iconPadding?: number,
	handleColor?: string;
	rightImgAlt?: string
}