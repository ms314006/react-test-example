import { ADD_COUNT, SUB_COUNT } from '../action/counter';

const initState = {
  count: 0,
};

const counter = (state = initState, payload) => {
  switch (payload.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case SUB_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counter;
