// eslint-disable-next-line @typescript-eslint/ban-types
export default function debounce<T>(fn: Function): () => Promise<T> {
  let pending: Promise<T> | undefined;
  return () => {
    if (!pending) {
      pending = new Promise<T>((resolve) => {
        // eslint-disable-next-line promise/always-return
        Promise.resolve().then(() => {
          pending = undefined;
          resolve(fn());
        }).catch((error) => console.log(error));
      });
    }

    return pending;
  };
}
