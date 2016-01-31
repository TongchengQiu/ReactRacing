export const CHANGE_SPEED = 'CHANGE_SPEED';

export function changeSpeed(speed) {
  return {
    type: 'CHANGE_SPEED',
    speed
  };
}
