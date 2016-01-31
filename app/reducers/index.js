import {
  CHANGE_STATUS,
  CHANGE_SPEED,
  CHANGE_SIDE,
  CHANGE_STARTTIME,
  CHANGE_WAIT_START
} from '../actions';

const initState = {
  speed: 0,
  status: 'loading',
  side: 'left',
  startTime: 3,
  isWaitStart: false,
};

export default function(state = initState, action) {
  switch (action.type) {
    case CHANGE_STATUS:
      return Object.assign({}, state, {
        status: action.status,
      });
    case CHANGE_SPEED:
      return Object.assign({}, state, {
        speed: action.speed,
      });
    case CHANGE_SIDE:
      return Object.assign({}, state, {
        side: action.side,
      });
    case CHANGE_STARTTIME:
      return Object.assign({}, state, {
        startTime: action.startTime,
      });
    case CHANGE_WAIT_START:
      return Object.assign({}, state, {
        isWaitStart: action.isWaitStart,
      });
    default:
      return state;
  }
}
