import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
import { GLOBAL_ACTIONS } from "./GlobalActions";

const initialState = {
  address: "",
  surgeryId: "",
  hospitalId: "",
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const setAddress = (newAddress) => {
    dispatch({ type: GLOBAL_ACTIONS.SET_ADDRESS, payload: newAddress });
  };

  const setHospitalId = (newHospitalId) => {
    dispatch({ type: GLOBAL_ACTIONS.SET_HOSPITAL, payload: newHospitalId });
  };

  const setSurgeryId = (newSurgeryId) => {
    dispatch({ type: GLOBAL_ACTIONS.SET_SURGERY, payload: newSurgeryId });
  };

  return (
    <GlobalContext.Provider
      value={{
        address: state.address,
        hospitalId: state.hospitalId,
        surgeryId: state.surgeryId,
        setAddress,
        setHospitalId,
        setSurgeryId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
