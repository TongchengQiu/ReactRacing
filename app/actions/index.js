// 车需要 状态、速度、方向
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_SPEED = 'CHANGE_SPEED';
export const CHANGE_SIDE = 'CHANGE_SIDE';

// 改变状态
// string: 'loading', 'stop', 'run'
export function changeStatus(status) {
  return {
    type: 'CHANGE_STATUS',
    status
  };
}
// 改变速度
// num: [0, 300]
export function changeSpeed(speed) {
  return {
    type: 'CHANGE_SPEED',
    speed
  };
}
// 改变方向
// string: 'left' , 'right'
export function changeSide(side) {
  return {
    type: 'CHANGE_SIDE',
    side
  };
}
