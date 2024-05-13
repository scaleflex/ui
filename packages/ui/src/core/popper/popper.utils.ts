export const passEventToUnderLayingEvent = (event: React.MouseEvent<HTMLDivElement>): void => {
  setTimeout(() => {
    if (event.clientX && event.clientY) {
      const elem = document.elementFromPoint(event.clientX, event.clientY);
      if (elem) {
        elem.dispatchEvent(event.nativeEvent);
      }
    }
  }, 0);
};