export const MAX_CONTENT_WIDTH = 720;

export function getContentWidth(screenWidth: number, horizontalPadding = 32): number {
  return Math.min(screenWidth - horizontalPadding, MAX_CONTENT_WIDTH);
}
