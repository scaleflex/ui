export function mapNumber(number: number, oldMin: number, oldMax: number, newMin: number, newMax: number): number {
  return ((number - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin;
}
