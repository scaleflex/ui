import React, { useState } from "react";
import ErrorBroke from "@scaleflex/icons/error-broke";
import { Color } from "@scaleflex/ui/utils/types/palette";
import { lightPalette } from "@scaleflex/ui/theme/roots/palette";
import { intrinsicComponent } from "@scaleflex/ui/utils/functions";

import Styled from "./image-comparison-slider.styles";
import { ImagePreviewProps } from "./image-comparison-slider.props";


const ImagePreviewComponent = intrinsicComponent<ImagePreviewProps, HTMLImageElement>(
	(
		{
      fallbackPreviewProps,
			...rest
		}: ImagePreviewProps,
		ref
	): JSX.Element => {
		const {
			msgProps, icon: Icon = ErrorBroke, iconSize = 150, iconColor = lightPalette[Color.IconsSecondary], gap = 10,
	    backgroundColor = lightPalette[Color.BackgroundPrimaryHover]
		} = fallbackPreviewProps || {}

		const [isImgLoading, setIsImgLoading] = useState(true)
		const [isImgFailedToLoad, setIsImgFailedToLoad] = useState(false)

		const handleError = () => {
			setIsImgFailedToLoad(true)
			setIsImgLoading(false)
		}

		const { text = 'Failed to load img', ...restMsgProps  } = msgProps || {}

		if (isImgFailedToLoad) {
			return (
				<Styled.FallbackPreviewWrapper ref={ref} backgroundColor={backgroundColor} gap={gap}>
					<Icon size={iconSize} color={iconColor} />
					<Styled.FallbackPreviewMsg {...restMsgProps}>{text}</Styled.FallbackPreviewMsg>
				</Styled.FallbackPreviewWrapper>
			)
		}

		return (
			<Styled.Image
				draggable="false"
				onError={handleError}
				onLoad={() => setIsImgLoading(false)}
				isLoading={isImgLoading}
				{...rest}
			/>
		)
	})

export default ImagePreviewComponent