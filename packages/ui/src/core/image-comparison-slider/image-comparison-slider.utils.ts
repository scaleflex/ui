export const getHorizontalPosition = ({ cursorHorizontalPosition, width, left, handleWidth} :  {
	cursorHorizontalPosition: number;
	width: number;
	left: number;
	handleWidth: number
}): { horizontalPosition?: number; } | undefined => {
	const isHandleInBoundaries = (cursorHorizontalPosition <= width + left - handleWidth) &&  (cursorHorizontalPosition >= left);

	const isHandleOutsideRightBoundary = cursorHorizontalPosition > width + left - handleWidth /2;
	const isHandleOutsideLeftBoundary  = cursorHorizontalPosition < left;

	if (isHandleInBoundaries) {
    //set handle at cursor position
		return { horizontalPosition: (cursorHorizontalPosition - left) / width }
	}

	if (isHandleOutsideRightBoundary) {
		//set handle at extreme right
		return { horizontalPosition: 0.997 }
	}

	if (isHandleOutsideLeftBoundary) {
    //set handle at extreme left
		return { horizontalPosition: 0 }
	}
}