import type { Values } from '../types';

/**
 * Type-safe Object.values
 */
export function objectValues<O extends { [s: string]: Values<O> }>(object: O): Values<O>[] {
  return Object.values(object);
}
