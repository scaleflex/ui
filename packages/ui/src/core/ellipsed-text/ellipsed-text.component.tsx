import React, { useState, useRef, useEffect, useCallback } from 'react';

import { EllipsedTextProps } from './ellipsed-text.props';
import TooltipV2 from '../tooltip-v2';
import { ignoreEvent, intrinsicComponent } from '../../utils/functions';
import Styled from './ellipsed-text.styles';

const POSSIBLE_FONT_GAP = 1 // there is a possibility that the font might render around ~1px in height/width for some chars so we are considering that 1px in-case.

const EllipsedText = intrinsicComponent<EllipsedTextProps, HTMLDivElement>(
  (
    {
      children,
      element = 'div',
      maxLinesCount = 2,
      customMaxHeight = 0,
      noTooltip = false,
      tooltipProps,
      textWrapperProps = {},
      ...rest
    }: EllipsedTextProps,
    ref
  ): JSX.Element => {
    const textContentRef = useRef<HTMLDivElement>(null)
    const [shouldEllipse, setShouldEllipse] = useState(false)
    const [maxHeight, setMaxHeight] = useState(customMaxHeight)

    const applyEllipsisIfNeeded = useCallback((elem: Element) => {
      if (!elem || !maxLinesCount) { return }

      const firstTextNodeWrapper = document.evaluate(
        './/text()', elem, null, XPathResult.FIRST_ORDERED_NODE_TYPE
      )?.singleNodeValue?.parentNode as Element || elem as Element;

      const lineHeight = parseInt(getComputedStyle(firstTextNodeWrapper).lineHeight)
      const elemScrollHeight = elem.scrollHeight
      const elemScrollWidth = elem.scrollWidth
      const elemHeight = (elem.clientHeight + POSSIBLE_FONT_GAP) || elemScrollHeight
      const elemWidth = (elem.clientWidth + POSSIBLE_FONT_GAP) || elemScrollWidth

      setShouldEllipse(elemScrollHeight > elemHeight || elemScrollWidth > elemWidth)
      setMaxHeight(customMaxHeight || (maxLinesCount * lineHeight))
    }, [maxLinesCount, customMaxHeight])

    const renderTooltipTitle = () => (
      <div onClick={ignoreEvent} onDoubleClick={ignoreEvent}>
        {children}
      </div>
    )

    useEffect(() => {
      if (textContentRef.current) {
        applyEllipsisIfNeeded(textContentRef.current)
      }
    }, [element, maxLinesCount, customMaxHeight])

    useEffect(() => {
      const applyOnElemResize = () => {
        if (textContentRef.current) {
          applyEllipsisIfNeeded(textContentRef.current)
        }
      }

      let resizeObserver = new ResizeObserver(applyOnElemResize)

      if (textContentRef.current) {
        resizeObserver.observe(textContentRef.current)
      }

      return () => {
        resizeObserver.disconnect()
      }
    }, [])

    return (
      <Styled.EllipsedTextWrapper ref={ref} {...textWrapperProps}>
        <Styled.EllipsedTextContent
          ref={textContentRef}
          as={element}
          $maxHeight={maxHeight && `${maxHeight}px`}
          {...rest}
        >
          {shouldEllipse && !noTooltip ? (
            <TooltipV2
              position="top"
              size="md"
              arrow
              {...tooltipProps}
              title={renderTooltipTitle()}
            >
              <Styled.TooltipContent as={element} $maxHeight={maxHeight && `${maxHeight}px`}>
                {children}
              </Styled.TooltipContent>
            </TooltipV2>
          ) : (
            children
          )}
        </Styled.EllipsedTextContent>

        {shouldEllipse && <Styled.DotsWrapper>...</Styled.DotsWrapper>}
      </Styled.EllipsedTextWrapper>
    )
  }
);

export default EllipsedText;
