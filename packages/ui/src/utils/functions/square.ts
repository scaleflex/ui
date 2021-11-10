export const drawSquare = (canvas: any, hue: number, width: number, height: number): void => {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.fillRect(0, 0, width, height);

  const gradientWhite = ctx.createLinearGradient(0, 0, width, 0);
  gradientWhite.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradientWhite.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = gradientWhite;
  ctx.fillRect(0, 0, width, height);

  const gradientBlack = ctx.createLinearGradient(0, 0, 0, height);
  gradientBlack.addColorStop(0, 'rgba(0, 0, 0, 0)');
  gradientBlack.addColorStop(1, 'rgba(0, 0, 0, 1)');
  ctx.fillStyle = gradientBlack;
  ctx.fillRect(0, 0, width, height);
};
