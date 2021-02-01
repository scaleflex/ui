import { BasePlacement, Placement, auto } from '../enums';

export default function getBasePlacement(
  placement: Placement | typeof auto
): BasePlacement {
  return (placement.split('-')[0]);
}
