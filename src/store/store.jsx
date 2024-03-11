import { createStore } from 'redux';

const initialState = {
  balance: 0,
  fullName: "",
  mobile: 0,
}

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + +action.payload };

    case "withdrawal":
      return { ...state, balance: state.balance - +action.payload }

    case "mobileUpdate":
      return { ...state, mobile: action.payload };

    case "nameUpdate":
      return { ...state, fullName: action.payload };
    case "reset":
      return initialState;

    default:
      return state;
  }
}

const store = createStore(accountReducer);

export default store;
