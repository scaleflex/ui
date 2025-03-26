import React, { useState, useMemo, useEffect, KeyboardEvent } from 'react';
import { PinOutline, DeleteOutline } from '@scaleflex/icons';

import Select from '../select';
import MenuItem from '../menu-item';
import useDrag from '../../hooks/use-drag';
import {
  colorToHsl,
  hexToRgb,
  hslToHex,
  hslToHsv,
  hsvToHsl,
  restrictNumber,
  mapNumber,
  colorToHex,
  getElemDocumentCoords,
  rgbToHex,
  validateHex,
  rgbStringToArray,
} from '../../utils/functions';
import type { ColorPickerProps } from './color-picker.props';
import Styled from './color-picker.styles';
import ColorItem from './color-item.component';

const transparentColor = ['rgba(0,0,0,0)'];
const transparentColorHex = '#00000000';
const colorsHuesCount = 360;
const ColorPicker = ({
  defaultColor = '#000000',
  onChange,
  pinnedColors = [],
  showTransparentColor = false,
  hidePinIcon = false,
  containerProps, // TODO: Remove containerProps in major release
  MenuProps,
  ref,
  ...rest
}: ColorPickerProps): JSX.Element => {
  const showedColors = showTransparentColor ? transparentColor.concat(pinnedColors) : pinnedColors;
  const isTransparentColor = (color: string): boolean => color === transparentColorHex || color === transparentColor[0];
  const [bar, setBar] = useState({
    color: '#ff0000',
    pointerLeft: 0,
  });
  const [rangePicker, setRangePicker] = useState({
    color: isTransparentColor(defaultColor) ? '#00000000' : colorToHex(defaultColor) || '#000000',
    pointer: { left: 0, top: 0 },
  });
  const [localPinnedColors, setLocalPinnedColors] = useState(showedColors);
  const [inputType, setInputType] = useState('hex');
  const [rgbColorValue, setRgbColorValue] = useState<number[]>([]);
  const [hexInputValue, setHexInputValue] = useState(colorToHex(rangePicker.color));
  const [barRef, setBarRef] = useState<HTMLTableElement | null>(null);
  const [rangePickerRef, setRangePickerRef] = useState<HTMLDivElement | null>(null);

  const isColorChecked = (checkedColor: string): boolean => {
    if (checkedColor === transparentColor[0] && rangePicker.color === transparentColorHex) {
      return true;
    }
    return checkedColor === rangePicker.color;
  };

  const filterTransparentColor = (colors: string[]): string[] => colors.filter((item) => item !== 'rgba(0,0,0,0)');
  const getRgbColor = (color: string): string =>
    isTransparentColor(color) ? transparentColor[0] : `rgb(${hexToRgb(color).join(', ')})`;

  const handlePinnedColors = (hexColor: string, type: string): void => {
    if (type === 'add') {
      const newLocalPinnedColors = [...localPinnedColors, hexColor];
      setLocalPinnedColors(newLocalPinnedColors);

      if (typeof onChange === 'function') {
        onChange(rangePicker.color, getRgbColor(hexColor), filterTransparentColor(newLocalPinnedColors));
      }
    } else {
      const newLocalPinnedColors = localPinnedColors.filter((item) => item !== rangePicker.color);
      setLocalPinnedColors(newLocalPinnedColors);

      if (typeof onChange === 'function') {
        onChange(rangePicker.color, getRgbColor(hexColor), filterTransparentColor(newLocalPinnedColors));
      }
    }
  };

  const changeBarPosByColor = (color: string): void => {
    if (barRef !== null) {
      const { left } = getElemDocumentCoords(barRef)!;
      const [h] = colorToHsl(color || rangePicker.color);
      const targetColorElem = barRef.querySelector(`[data-hue='${h}']`) as HTMLElement;
      if (targetColorElem !== null) {
        const targetColorRgb = targetColorElem.style.backgroundColor || bar.color;
        setBar({
          color: targetColorRgb,
          pointerLeft: getElemDocumentCoords(targetColorElem)!.left - left || bar.pointerLeft,
        });
      }
    }
  };

  const handleRgbInput = (value: number, index: number): void | undefined => {
    if (value > 255 || Number.isNaN(value)) {
      return;
    }
    const rgbArr = rgbColorValue;
    rgbArr[index] = value;

    const newHexColor = rgbToHex(...rgbArr);

    setRgbColorValue([...rgbArr]);

    if (validateHex(newHexColor)) {
      setRangePicker({
        ...rangePicker,
        color: newHexColor,
      });

      changeBarPosByColor(newHexColor);

      changeRangePickerPointerPosByColor(newHexColor);
    }
  };

  const updateRgb = (color: string): void => {
    if (color.includes('rgb')) {
      setRgbColorValue(rgbStringToArray(color));
    } else {
      setRgbColorValue(hexToRgb(color));
    }
  };

  const getHexColor = (color: string): string => (isTransparentColor(color) ? transparentColorHex : color);

  const changeRangePickerPointerPosByColor = (color: string): void => {
    if (rangePickerRef !== null) {
      const { width, height } = getElemDocumentCoords(rangePickerRef)!;
      const colorHsl = colorToHsl(color);
      const colorHsv = hslToHsv(colorHsl[0], colorHsl[1] / 100, colorHsl[2] / 100);
      const left = mapNumber(colorHsv[1], 0, 100, 0, width);
      const top = height - mapNumber(colorHsv[2], 0, 100, 0, height);

      setRangePicker({
        color: getHexColor(color),
        pointer: { left, top },
      });
      changeBarPosByColor(color);
      updateRgb(color);

      if (typeof onChange === 'function') {
        onChange(getHexColor(color), getRgbColor(color), filterTransparentColor(localPinnedColors));
      }
    }
  };

  const changeRangePickerColorByPosition = (left: number, top: number, barColor: string): void => {
    if (rangePickerRef !== null) {
      const { width, height } = getElemDocumentCoords(rangePickerRef)!;

      const [barColorHue] = colorToHsl(barColor);

      const restrictedLeft = restrictNumber(left, 0, width) || 0;
      const restrictedTop = restrictNumber(top, 0, height) || 0;

      const hsl = hsvToHsl(barColorHue, restrictedLeft / width, (height - restrictedTop) / height);

      const hexColor = hslToHex(hsl[0], hsl[1], hsl[2]);

      setRangePicker({
        color: hexColor,
        pointer: {
          left: restrictedLeft,
          top: restrictedTop,
        },
      });

      if (typeof onChange === 'function') {
        onChange(hexColor, `rgb(${hexToRgb(hexColor).join(', ')})`, filterTransparentColor(localPinnedColors));
      }
    }
  };

  const changeBarColorByPosition = (pointerLeft: number): string => {
    const barElem = barRef;
    if (barElem !== null) {
      const { width } = getElemDocumentCoords(barElem)!;
      const mappedPointerLeft = restrictNumber(
        Math.round(mapNumber(pointerLeft, 0, width, 0, colorsHuesCount)),
        0,
        colorsHuesCount
      );
      const targetColorElem = barElem.querySelector(`[data-hue='${mappedPointerLeft}']`) as HTMLElement;

      const targetColorRgb = targetColorElem.style.backgroundColor;

      setBar({
        color: targetColorRgb,
        pointerLeft: restrictNumber(pointerLeft, 0, width),
      });
      return targetColorRgb;
    }
    return bar.color;
  };

  const updateBarColor = (e: any): void => {
    const barElem = barRef;

    if (barElem !== null) {
      const { left } = getElemDocumentCoords(barElem)!;
      const pointerEvent = e.touches?.[0] || e;
      const barColor = changeBarColorByPosition(pointerEvent.pageX - left);

      changeRangePickerColorByPosition(rangePicker.pointer.left, rangePicker.pointer.top, barColor);
    }
  };

  const updateRangePickerColor = (e: any): void => {
    const rangePickerElem = rangePickerRef;
    if (rangePickerElem !== null) {
      const { left, top, height, width } = getElemDocumentCoords(rangePickerElem)!;
      const pointerLeft = e ? restrictNumber(e.pageX - left, 0, width) : rangePicker.pointer.left || 0;
      const pointerTop = e ? restrictNumber(e.pageY - top, 0, height) : rangePicker.pointer.left || 0;
      changeRangePickerColorByPosition(pointerLeft, pointerTop, bar.color);
    }
  };

  const moveBarPointerByArrows = (e: any): void => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
      return;
    }

    changeBarColorByPosition(bar.pointerLeft + (e.key === 'ArrowLeft' ? -1 : 1));
  };

  const moveRangePickerPointerByArrows = (e: KeyboardEvent<HTMLSpanElement>): void => {
    let currentDirection = 0;

    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      currentDirection = -1;
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      currentDirection = 1;
    }

    if (currentDirection) {
      changeRangePickerColorByPosition(
        (rangePicker.pointer.left || 0) + (['ArrowLeft', 'ArrowRight'].includes(e.key) ? currentDirection : 0),
        (rangePicker.pointer.top || 0) + (['ArrowUp', 'ArrowDown'].includes(e.key) ? currentDirection : 0),
        bar.color
      );
    }
  };

  const validateHexAndUpdate = (color: string) => {
    const testHex = validateHex(color);

    if (testHex) {
      changeRangePickerPointerPosByColor(color);
    }
    setHexInputValue(color);
  };

  useEffect(() => {
    changeBarPosByColor(rangePicker.color);
    changeRangePickerPointerPosByColor(rangePicker.color);
  }, [barRef]);

  useEffect(() => {
    setHexInputValue(rangePicker.color);
    updateRgb(rangePicker.color);
  }, [rangePicker.color]);

  const barColors = useMemo(
    () =>
      [...new Array(colorsHuesCount + 1)].map((_, h) => (
        <Styled.BarColorStop key={h} $color={`hsl(${h}, 100%, 50%)`} data-hue={h} />
      )),
    []
  );

  const barPointSliding = useDrag(updateBarColor, updateBarColor, null);
  const rangePickerPointSliding = useDrag(updateRangePickerColor, updateRangePickerColor, null);

  return (
    <Styled.ColorPickerWrapper ref={ref} {...rest}>
      <Styled.ColorPickerAction>
        <Styled.SelectWrapper>
          <Styled.Select value={inputType}>
            <Select
              size="sm"
              value={inputType}
              // TODO: Remove containerProps in major release
              MenuProps={{ zIndex: 11112, ...containerProps, ...MenuProps }}
              onChange={(ev: any) => setInputType(ev)}
              fullWidth
              hideEllipsis
            >
              <MenuItem value="hex">Hex</MenuItem>
              <MenuItem value="rgb">RGB</MenuItem>
            </Select>
          </Styled.Select>

          {inputType === 'hex' ? (
            <Styled.HexInput
              size="sm"
              error={!/^#(?:[0-9a-fA-F]{3,4}){1,2}$/i.test(rangePicker.color)}
              value={hexInputValue}
              onChange={(e: any) => validateHexAndUpdate(e.target.value)}
            />
          ) : (
            rgbColorValue.map((rgb, index) => (
              <Styled.RgbInput
                key={index}
                size="sm"
                value={rgb}
                onChange={(e: any) => handleRgbInput(Number(e.target?.value), index)}
              />
            ))
          )}
        </Styled.SelectWrapper>

        {rangePicker.color !== transparentColorHex && !hidePinIcon && (
          <Styled.ColorPickerIcon
            onClick={() =>
              localPinnedColors.some((checkedColor) => isColorChecked(checkedColor))
                ? handlePinnedColors(rangePicker.color, 'delete')
                : handlePinnedColors(rangePicker.color, 'add')
            }
          >
            {localPinnedColors.some((checkedColor) => isColorChecked(checkedColor)) ? (
              <DeleteOutline />
            ) : (
              <PinOutline />
            )}
          </Styled.ColorPickerIcon>
        )}
      </Styled.ColorPickerAction>

      <Styled.RangePickerWrapper ref={setRangePickerRef} color={bar.color} {...rangePickerPointSliding}>
        <Styled.WhiteGradient />
        <Styled.BlackGradient />
        <Styled.ColorPointer
          tabIndex={-1}
          left={rangePicker.pointer.left || 0}
          top={rangePicker.pointer.top || 0}
          onKeyDown={moveRangePickerPointerByArrows}
          pointerColor={hexInputValue}
          considerTopWidth
        />
      </Styled.RangePickerWrapper>

      <Styled.BarWrapper {...barPointSliding}>
        <Styled.Bar ref={setBarRef}>
          <tbody>
            <tr>{barColors}</tr>
          </tbody>
        </Styled.Bar>
        <Styled.ColorPointer
          tabIndex={-1}
          left={bar.pointerLeft}
          onKeyDown={moveBarPointerByArrows}
          considerTopWidth={false}
          pointerColor={hexInputValue}
          style={{ top: -3 }}
        />
      </Styled.BarWrapper>

      <Styled.ColorItemsContainer>
        {localPinnedColors.map((color) => (
          <div className="item" key={color}>
            <ColorItem
              value={color}
              checked={isColorChecked(color)}
              onChange={(ev) => changeRangePickerPointerPosByColor(ev.target.value)}
            />
          </div>
        ))}
      </Styled.ColorItemsContainer>
    </Styled.ColorPickerWrapper>
  );
};

export default ColorPicker;
