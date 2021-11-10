export const initHueBar = (canvas: any, width: number, height: number) => {
  const ctx = canvas.getContext('2d');
  ctx.rect(0, 0, width, height);
  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  for (let i = 0; i <= 360; i += 30) {
    gradient.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`);
  }
  ctx.fillStyle = gradient;
  ctx.fill();
};
