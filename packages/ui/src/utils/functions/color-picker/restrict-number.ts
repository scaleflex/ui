export function restrictNumber(number: number, min = 0, max: number): number {
  // we are not assigning default value for it as if max was null it will override the default value.
  const currentMax = max || 1000000;
  const convertedNumber = +number;

  return Math.min(Math.max(min, convertedNumber), currentMax);
}
