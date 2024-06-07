import { IconProps } from "@scaleflex/icons/icon.props";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface ImagePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	src?: string;
	brokenPreviewProps?: {
		icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>,
		iconSize: number,
		iconColor: string,
		gap: number,
		msgProps: {text: string, color: string},
		backgroundColor: string,
	};
}