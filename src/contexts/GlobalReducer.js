import { GLOBAL_ACTIONS } from "./GlobalActions";

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case GLOBAL_ACTIONS.SET_ADDRESS:
      return { ...state, address: action.payload };
    case GLOBAL_ACTIONS.SET_HOSPITAL:
      return { ...state, hospitalId: action.payload };
    case GLOBAL_ACTIONS.SET_SURGERY:
      return { ...state, surgeryId: action.payload };
    default:
      return state;
  }
};

export default GlobalReducer;
