import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import adultSurgeryData from "../assets/adult_surgery.json";
import pediatricSurgeryData from "../assets/paediatric_surgery.json";
import axios from "axios";
import config from "../config/config";

const convertToHospital = (data) => {
  return {
    name: data[0],
    address: data[2],
    priority1: data[4],
    priority2: data[5],
    priority3: data[6],
  };
};

const convertData = (data) => {
  return data.map(convertToHospital);
};

const getAddressListString = (data) => {
  let result;
  data = data.map((element) => {
    return element.address + ", Canada";
  });
  data.forEach((element, index) => {
    if (index === 0) {
      result = element;
    } else {
      result += " | " + element;
    }
  });

  return result;
};

const useHospitalList = () => {
  const [hospitalList, setHospitalList] = useState([]);
  const { address, isAdult, surgeryId } = useContext(GlobalContext);

  useEffect(() => {
    if (isAdult) {
      setHospitalList(convertData(adultSurgeryData[surgeryId]));
    } else {
      setHospitalList(convertData(pediatricSurgeryData[surgeryId]));
    }
  }, [isAdult, surgeryId]);

  useEffect(() => {
    if (address !== "" && hospitalList !== [])
      axios({
        method: "GET",
        url: "/distancematrix/json",
        params: {
          origins: address,
          destinations: getAddressListString(hospitalList),
          departure_time: "now",
          key: config.googleDistanceApiKey,
        },
        headers: { "Access-Control-Allow-Origin": "*" },
      }).then((response) => {
        console.log(response.data.rows[0].elements);
        setHospitalList(
          hospitalList
            .map((hospital, index) => {
              return {
                ...hospital,
                duration: response.data.rows[0].elements[index].duration.text,
                durationSeconds:
                  response.data.rows[0].elements[index].duration.value,
              };
            })
            .sort((a, b) => a.durationSeconds - b.durationSeconds)
        );
      });
  }, [address, hospitalList]);

  return hospitalList;
};

export default useHospitalList;
