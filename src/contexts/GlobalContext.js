import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
import { GLOBAL_ACTIONS } from "./GlobalActions";

const initialState = {
  address: "",
  surgeryId: "Aesthetic",
  isAdult: true,
  hospitalId: "Unity Health Toronto - St. Michael's",
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

  const setIsAdult = (neIsAdult) => {
    dispatch({ type: GLOBAL_ACTIONS.SET_SURGERY, payload: neIsAdult });
  };

  return (
    <GlobalContext.Provider
      value={{
        address: state.address,
        hospitalId: state.hospitalId,
        surgeryId: state.surgeryId,
        isAdult: state.isAdult,
        setAddress,
        setHospitalId,
        setSurgeryId,
        setIsAdult,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
