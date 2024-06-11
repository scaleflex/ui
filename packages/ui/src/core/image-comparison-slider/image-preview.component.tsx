import React, { useState } from "react";
import ErrorBroke from "@scaleflex/icons/error-broke";

import { ImagePreviewProps } from "./image-comparison-slider.props";
import { intrinsicComponent } from "../../utils/functions";
import { lightPalette } from "../../theme/roots/palette";
import Styled from "./image-comparison-slider.styles";
import { Color } from "../../utils/types/palette";


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