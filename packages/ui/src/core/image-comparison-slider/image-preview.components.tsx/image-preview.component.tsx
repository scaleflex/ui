import React, { useState } from "react";

import { intrinsicComponent } from "@scaleflex/ui/utils/functions";
import { ImagePreviewProps } from "./image-preview.props";
import { lightPalette } from "@scaleflex/ui/theme/roots/palette";

import ErrorBroke from "@scaleflex/icons/error-broke";
import { Color } from "@scaleflex/ui/utils/types/palette";
import Styled from "../image-comparison-slider.styles";


const ImagePreviewComponent = intrinsicComponent<ImagePreviewProps, HTMLDivElement>(
	(
		{
			src,
			brokenPreviewProps = {
				icon: ErrorBroke,
				iconSize: 150,
				iconColor: lightPalette[Color.IconsSecondary],
				gap: 10,
				msgProps: {
					text: 'Failed to load img',
					color: lightPalette[Color.TextSecondary]
				},
				backgroundColor: lightPalette[Color.BackgroundPrimaryHover]
			},
			...rest
		}: ImagePreviewProps,
		ref
	): JSX.Element => {
		const [isImgLoading, setIsImgLoading] = useState(true)
		const [isImgFailedToLoad, setIsImgFailedToLoad] = useState(false)

		const handleError = () => {
			setIsImgFailedToLoad(true)
			setIsImgLoading(false)
		}

		const {
			icon: Icon = ErrorBroke, iconSize = 150, iconColor = lightPalette[Color.IconsSecondary], gap = 10,
			msgProps = { text: 'Failed to load img', color: lightPalette[Color.TextSecondary] }, backgroundColor = lightPalette[Color.BackgroundPrimaryHover],
		} = brokenPreviewProps

		const { text, ...restMsgProps } = msgProps

		if (isImgFailedToLoad || !src) {
			return (
				<Styled.BrokenPreviewWrapper ref={ref} backgroundColor={backgroundColor} gap={gap}>
					<Icon size={iconSize} color={iconColor} />
					<Styled.BrokenPreviewMsg {...restMsgProps}>{text}</Styled.BrokenPreviewMsg>
				</Styled.BrokenPreviewWrapper>
			)
		}

		return (
			<Styled.Image
				draggable="false"
				onError={handleError}
				onLoad={() => setIsImgLoading(false)}
				isLoading={isImgLoading}
				src={src}
				{...rest}
			/>
		)
	})

export default ImagePreviewComponent