export function phaseToColor(phase: number, alpha = 0.9): string {
  const normalized = (phase + Math.PI) / (2 * Math.PI);
  const hue = 190 + normalized * 150;

  return `hsla(${hue.toFixed(1)} 88% 67% / ${alpha})`;
}

export const instrumentPalette = {
  pearl: '#fff4f1',
  coral: '#ff9b92',
  blush: '#ffc2b6',
  amber: '#f2d198',
  mist: '#c2b2b3',
};
