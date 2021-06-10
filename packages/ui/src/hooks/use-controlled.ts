/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
import * as React from 'react';

export default function useControlled({ controlled, default: defaultProp }: any): any {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const { current: isControlled } = React.useRef(controlled !== undefined);
  const [valueState, setValue] = React.useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  const setValueIfUncontrolled = React.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);

  return [value, setValueIfUncontrolled];
}
