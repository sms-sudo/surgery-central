import { GLOBAL_ACTIONS } from "./GlobalActions";

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case GLOBAL_ACTIONS.SET_ADDRESS:
      return { address: action.payload, ...state };
    case GLOBAL_ACTIONS.SET_HOSPITAL:
      return { hospitalId: action.payload, ...state };
    case GLOBAL_ACTIONS.SET_SURGERY:
      return { surgeryId: action.payload, ...state };
    default:
      return state;
  }
};

export default GlobalReducer;
