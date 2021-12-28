export function asc(a: number, b: number): number {
  return a - b;
}
export function valueToPercent(value: number, min: number, max: number): number {
  return ((value - min) * 100) / (max - min);
}

export function percentToValue(percent: number, min: number, max: number): number {
  return (max - min) * percent + min;
}

function getDecimalPrecision(num: number): number {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + Number.parseInt(parts[1], 10);
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}
export function roundValueToStep(value: number, step: number, min: number): number {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

export function setValueIndex({
  values,
  newValue,
  index,
}: {
  values: number[];
  newValue: number;
  index: number;
}): number | number[] {
  const output = values.slice();
  output[index] = newValue;
  return output.sort(asc);
}

export function findClosest(values: number[], currentValue: number): number {
  const { index: closestIndex } = values.reduce((acc: any, value: number, index: number) => {
    const distance = Math.abs(currentValue - value);

    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index,
      };
    }

    return acc;
  }, null);
  return closestIndex;
}

export function ownerDocument(node: Node | null | undefined): Document {
  return (node && node.ownerDocument) || document;
}

export function clamp(value: number | null, min: number, max: number): number {
  if (value == null) {
    return min;
  }
  return Math.min(Math.max(min, value), max);
}

export function trackFinger(event: any, touchId: any): { x: number | null; y: number | null } | boolean {
  if (touchId.current !== undefined && event.changedTouches) {
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY,
        };
      }
    }

    return false;
  }

  return {
    x: event.clientX,
    y: event.clientY,
  };
}
