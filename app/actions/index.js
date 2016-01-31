// 车需要 状态、速度、方向
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_SPEED = 'CHANGE_SPEED';
export const CHANGE_SIDE = 'CHANGE_SIDE';

// 改变状态
// string: 'loading', 'stop', 'run'
function changeStatus(status) {
  return {
    type: 'CHANGE_STATUS',
    status
  };
}
// 改变速度
// num: [0, 300]
function changeSpeed(speed) {
  return {
    type: 'CHANGE_SPEED',
    speed
  };
}
// 改变方向
// string: 'left' , 'right'
function changeSide(side) {
  return {
    type: 'CHANGE_SIDE',
    side
  };
}


export function upSpeed() {
  return (dispatch, getState) => {
    return dispatch(changeSpeed(108));
  };
}
export function turnLeft() {
  return (dispatch, getState) => {
    return dispatch(changeSide('left'));
  };
}
export function turnRight() {
  return (dispatch, getState) => {
    return dispatch(changeSide('right'));
  };
}
export function startGame() {
  return (dispatch, getState) => {
    dispatch(changeSide('left'));
    dispatch(changeStatus('run'));
    dispatch(changeSpeed(1));
    let _upSpeedFlag = setInterval(() => {
      let _nowSpeed = getState().speed;
      if(_nowSpeed >= 198) {
        clearInterval(_upSpeedFlag);
      }
      dispatch(changeSpeed(_nowSpeed + 2));
    }, 20);
  };
}
