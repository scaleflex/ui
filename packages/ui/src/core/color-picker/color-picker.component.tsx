/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-constant-condition */
/* eslint-disable react/no-array-index-key */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable id-length */
import React, { useState, useMemo, useEffect, KeyboardEvent } from 'react';
import PT from 'prop-types';
import { PinOutline, DeleteOutline } from '@scaleflex/icons';

import Select from '../select';
import MenuItem from '../menu-item';
import Input from '../input';
import useDrag from '../../hooks/use-drag';
import {
  intrinsicComponent,
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
const ColorPicker = intrinsicComponent<ColorPickerProps, HTMLDivElement>(
  (
    { defaultColor = '#000000', onChange, pinnedColors = [], showTransparentColors = false, ...rest }: ColorPickerProps,
    ref
  ): JSX.Element => {
    const showedColors = showTransparentColors ? transparentColor.concat(pinnedColors) : pinnedColors;
    const [bar, setBar] = useState({
      color: '#ff0000',
      pointerLeft: 0,
    });
    const [rangePicker, setRangePicker] = useState({
      color: colorToHex(defaultColor) || '#000000',
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

    const handlePinnedColors = (hexColor: string, type: string): void => {
      if (type === 'add') {
        const newLocalPinnedColors = [...localPinnedColors, hexColor];
        setLocalPinnedColors(newLocalPinnedColors);

        if (typeof onChange === 'function') {
          onChange(rangePicker.color, `rgb(${hexToRgb(rangePicker.color).join(', ')})`, newLocalPinnedColors);
        }
      } else {
        const newLocalPinnedColors = localPinnedColors.filter((item) => item !== rangePicker.color);
        setLocalPinnedColors(newLocalPinnedColors);

        if (typeof onChange === 'function') {
          onChange(rangePicker.color, `rgb(${hexToRgb(rangePicker.color).join(', ')})`, newLocalPinnedColors);
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

    const handleRgbInput = (value: number, index: number) => {
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
      }
    };

    const updateRgb = (color: string): void => {
      if (color.includes('rgb')) {
        setRgbColorValue(rgbStringToArray(color));
      } else {
        setRgbColorValue(hexToRgb(color));
      }
    };

    const filterTransparentColor = (): string[] => localPinnedColors.filter((item) => item !== 'rgba(0,0,0,0)');

    const getRgbColor = (color: string): string =>
      color === transparentColor[0] ? transparentColor[0] : `rgb(${hexToRgb(color).join(', ')})`;

    const getHexColor = (color: string): string => (color === transparentColor[0] ? transparentColorHex : color);

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
          onChange(getHexColor(color), getRgbColor(color), filterTransparentColor());
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
          onChange(hexColor, `rgb(${hexToRgb(hexColor).join(', ')})`, filterTransparentColor());
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
        <Styled.RangePickerWrapper ref={setRangePickerRef} color={bar.color} {...rangePickerPointSliding}>
          <Styled.WhiteGradient />
          <Styled.BlackGradient />
          <Styled.ColorPointer
            tabIndex={-1}
            left={rangePicker.pointer.left || 0}
            top={rangePicker.pointer.top || 0}
            onKeyDown={moveRangePickerPointerByArrows}
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

        <Styled.ColorPickerAction>
          <Styled.Select value={inputType}>
            <Select
              size="sm"
              value={inputType}
              MenuProps={{ zIndex: 11112 }}
              onChange={(ev: any) => setInputType(ev)}
              fullWidth
            >
              <MenuItem value="hex">Hex</MenuItem>
              <MenuItem value="rgb">RGB</MenuItem>
            </Select>
          </Styled.Select>

          {inputType === 'hex' ? (
            <Input
              size="sm"
              error={!/^#([\da-f]{3}){1,2}$/i.test(rangePicker.color)}
              value={hexInputValue}
              onChange={(e: any) => validateHexAndUpdate(e.target.value)}
              style={{ width: '45%' }}
            />
          ) : (
            rgbColorValue.map((rgb, index) => (
              <Input
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                size="sm"
                value={rgb}
                onChange={(e: any) => handleRgbInput(Number(e.target?.value), index)}
                style={{ width: '20%' }}
              />
            ))
          )}
          {rangePicker.color !== transparentColorHex && (
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
      </Styled.ColorPickerWrapper>
    );
  }
);

ColorPicker.defaultProps = {
  defaultColor: '#000000',
  pinnedColors: [],
  showTransparentColors: false,
};

ColorPicker.propTypes = {
  defaultColor: PT.string,
  onChange: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  pinnedColors: PT.array,
  showTransparentColors: PT.bool,
};

export default ColorPicker;
