import React, { useState, useRef, useLayoutEffect, useCallback } from 'react';

import { EllipsedTextProps } from './ellipsed-text.props';
import TooltipV2 from '../tooltip-v2';
import { ignoreEvent, intrinsicComponent } from '../../utils/functions';
import Styled from './ellipsed-text.styles';
import { getTextSuffix } from './ellipsed-text.utils';

const POSSIBLE_FONT_GAP = 1; // there is a possibility that the font might render around ~1px in height/width for some chars so we are considering that 1px in-case.

const EllipsedText = intrinsicComponent<EllipsedTextProps, HTMLDivElement>(
  (
    {
      children,
      element = 'div',
      maxLinesCount = 2,
      customMaxHeight,
      noTooltip = false,
      forceTooltip = false,
      tooltipProps,
      tooltipTitle,
      textSuffix,
      textWrapperProps = {},
      ...rest
    }: EllipsedTextProps,
    ref
  ): JSX.Element => {
    const textContentRef = useRef<HTMLDivElement>(null);
    const [shouldEllipse, setShouldEllipse] = useState(false);

    const applyEllipsisIfNeeded = useCallback(
      (elem: Element) => {
        if (!elem || !maxLinesCount) {
          return;
        }

        const elemScrollHeight = elem.scrollHeight;
        const elemScrollWidth = elem.scrollWidth;
        const elemHeight = elem.clientHeight + POSSIBLE_FONT_GAP || elemScrollHeight;
        const elemWidth = elem.clientWidth + POSSIBLE_FONT_GAP || elemScrollWidth;

        setShouldEllipse(elemScrollHeight > elemHeight || elemScrollWidth > elemWidth);
      },
      [maxLinesCount, customMaxHeight]
    );

    const renderTooltipTitle = () => (
      <div onClick={ignoreEvent} onDoubleClick={ignoreEvent}>
        {tooltipTitle || children}
      </div>
    );

    useLayoutEffect(() => {
      if (textContentRef.current) {
        applyEllipsisIfNeeded(textContentRef.current);
      }
    }, [element, maxLinesCount, customMaxHeight]);

    useLayoutEffect(() => {
      const applyOnElemResize = () => {
        if (textContentRef.current) {
          applyEllipsisIfNeeded(textContentRef.current);
        }
      };

      const resizeObserver = new ResizeObserver(applyOnElemResize);

      if (textContentRef.current) {
        resizeObserver.observe(textContentRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    const renderEllipsedText = () => (
      <Styled.EllipsedTextWrapper $maxLinesCount={maxLinesCount} ref={textContentRef} {...textWrapperProps} {...rest}>
        {(shouldEllipse && !noTooltip) || forceTooltip ? (
          <TooltipV2 position="top" size="md" ref={ref} arrow {...tooltipProps} title={renderTooltipTitle()}>
            <Styled.TooltipContent as={element} $customMaxHeight={customMaxHeight}>
              {children}
            </Styled.TooltipContent>
          </TooltipV2>
        ) : (
          children
        )}
      </Styled.EllipsedTextWrapper>
    );

    return textSuffix && shouldEllipse ? (
      <Styled.EllipsedTextContainer>
        {renderEllipsedText()}
        <Styled.SuffixTextWrapper>{getTextSuffix(textSuffix)}</Styled.SuffixTextWrapper>
      </Styled.EllipsedTextContainer>
    ) : (
      renderEllipsedText()
    );
  }
);

export default EllipsedText;
