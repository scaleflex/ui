import { type MouseEvent } from 'react';

export const onClickByMouseDown = (event: MouseEvent, callback: (event: MouseEvent) => void): void => {
  event.preventDefault();

  if (event.button !== 0) {
    return;
  }

  if (callback) {
    callback(event);
  }
};
