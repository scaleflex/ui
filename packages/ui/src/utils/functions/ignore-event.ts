export const ignoreEvent = (event: any) => {
  const tagName = event.target.tagName;

  if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
    event.stopPropagation();
    return;
  }

  event.preventDefault();
  event.stopPropagation();
};
