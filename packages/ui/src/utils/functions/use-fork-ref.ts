import * as React from 'react';
import setRef from './set-ref';

export function useForkRef<T>(
  refA: React.MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined,
  refB: React.MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined
): any {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return React.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return (refValue: any) => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}
