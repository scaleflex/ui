import type { SideObject } from '../types';
import getFreshSideObject from './get-fresh-side-object';

export default function mergePaddingObject(
  paddingObject: SideObject
): SideObject {
  return {
    ...getFreshSideObject(),
    ...paddingObject,
  };
}
