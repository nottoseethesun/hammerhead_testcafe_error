import ACTIONS from './action';

const defaultState = {
  log: []
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.ADD_LOG: {
      let item = action.payload;
      return { ...state, log: [...state.log, item] };
    }

    default:
      return state;
  }
};

export default todoReducer;
