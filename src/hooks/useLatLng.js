import axios from "axios";
import { useEffect } from "react";
import config from "../config/config";

const useLatLng = (address) => {
  useEffect(() => {
    axios({
      method: "GET",
      url: "/geocode/json",
      params: {
        address: "2075 Bayview Ave, Toronto, ON M4N 3M5, Canada",
        key: config.googlePlacesApiKey,
      },
    }).then((res) => console.log(res.data));
  }, []);
};

export default useLatLng;
