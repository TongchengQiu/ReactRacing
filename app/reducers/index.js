import {
  CHANGE_SPEED
} from '../actions';

export default function(state = {
  speed: 0
}, action) {
  switch (action.type) {
    case CHANGE_SPEED:
      return Object.assign({}, state, {
        speed: action.speed,
      });
    default:
      return state;
  }
}
