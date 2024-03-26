import { type MouseEvent } from 'react';

export const onMouseDown = (event: MouseEvent, callback: (event: MouseEvent) => void): void => {
  event.preventDefault();

  if (event.button !== 0) {
    return;
  }

  if (callback) {
    callback(event);
  }
};
