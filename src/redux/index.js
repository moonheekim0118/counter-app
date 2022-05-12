import { createStore } from "redux";

const initialState = {
  counter: {
    count: 0,
    diff: 1,
  },
};

const reducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: {
        ...state.counter,
        count: state.counter.count + state.counter.diff,
      },
    };
  }

  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: {
        ...state.counter,
        count: state.counter.count - state.counter.diff,
      },
    };
  }

  if (action.type === "RESET") {
    return initialState;
  }

  if (action.type === "SET_DIFF") {
    return {
      ...state,
      counter: {
        ...state.counter,
        diff: action.payload,
      },
    };
  }

  return state;
};

const store = createStore(reducer, initialState);

export default store;
