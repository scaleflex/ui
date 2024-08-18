import React, { Fragment } from 'react';

import Styled from './text-with-highlights.styles';
import { findAllMatches } from './text-with-highlights.utils';
import { TextWithHighlightsProps } from './text-with-highlights.props';
import { escapeRegExp, intrinsicComponent } from '../../utils/functions';

const TextWithHighlights = intrinsicComponent<TextWithHighlightsProps, HTMLDivElement>(
  ({ text, highlightText, highlightBackgroundColor }: TextWithHighlightsProps, ref): JSX.Element => {
    if (!text || !highlightText) {
      return <span>{text}</span>;
    }

    const regexp = new RegExp(escapeRegExp(highlightText), 'gi');
    const foundStrings = findAllMatches(text || '', regexp);

    if (foundStrings.length === 0) {
      return <span>{text}</span>;
    }

    const renderHighlightedText = () => {
      let latestIndex = 0;
      const highlightedText = foundStrings.map((foundString: { startIndex: number; endIndex: number }) => {
        const preNotHighlightedText = text.substring(latestIndex, foundString.startIndex);
        latestIndex = foundString.endIndex;

        return (
          <Fragment key={`str${foundString.startIndex}-${foundString.endIndex}`}>
            {preNotHighlightedText}
            <Styled.TextWithHighlights highlightColor={highlightBackgroundColor}>
              {text.substring(foundString.startIndex, foundString.endIndex)}
            </Styled.TextWithHighlights>
          </Fragment>
        );
      });

      return highlightedText.concat(<span key={text}>{text.substring(latestIndex)}</span>);
    };

    return <span ref={ref}>{renderHighlightedText()}</span>;
  }
);

export default TextWithHighlights;
