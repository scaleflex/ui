export interface TextWithHighlightsProps extends React.HTMLAttributes<HTMLSpanElement> {
	text: string,
	highlightText: string,
	highlightBackgroundColor?: string
}