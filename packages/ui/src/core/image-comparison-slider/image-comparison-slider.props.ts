import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { IconProps } from '@scaleflex/icons/icon.props';

export interface FallbackPreviewProps {
  gap?: number;
  iconSize?: number;
  iconColor?: string;
  backgroundColor?: string;
  msgProps?: { text?: string; color?: string };
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

export interface ImageComparisonSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  imgWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  leftImgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  rightImgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  fallbackPreviewProps?: FallbackPreviewProps;
  footerProps?: React.HTMLAttributes<HTMLDivElement> & { leftText?: string; rightText?: string; hideFooter?: boolean };
  handleProps?: {
    thumbIconSize?: number;
    thumbColor?: string;
    thumbIcon?: React.ReactNode;
    thumbIconPadding?: number;
    color?: string;
  };
}

export interface ImagePreviewProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackPreviewProps?: FallbackPreviewProps;
}
