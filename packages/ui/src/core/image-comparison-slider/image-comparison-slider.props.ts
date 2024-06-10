import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconProps } from "@scaleflex/icons/icon.props";

export interface FallbackPreviewProps extends React.HTMLAttributes<HTMLImageElement> {
	gap?: number,
	iconSize?: number,
	iconColor?: string,
	backgroundColor?: string,
	msgProps?: { text?: string, color?: string },
	icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>,
}

export interface ImageComparisonSliderProps extends React.HTMLAttributes<HTMLDivElement> {
	imgWrapperProps?: object;
  leftImgProps?: React.HTMLAttributes<HTMLImageElement>;
	rightImgProps?: React.HTMLAttributes<HTMLImageElement>;
	fallbackPreviewProps?: FallbackPreviewProps,
	handleProps?: { thumbIconSize?: number, thumbIcon?: React.ReactNode, thumbIconPadding?: number, color?: string }
}