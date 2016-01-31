import {
  CHANGE_STATUS,
  CHANGE_SPEED,
  CHANGE_SIDE
} from '../actions';

const initState = {
  speed: 0,
  status: 'loading',
  side: 'left',
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
    default:
      return state;
  }
}
