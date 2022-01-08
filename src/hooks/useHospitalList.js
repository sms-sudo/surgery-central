import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const hospitals = [
  {
    name: "Sunnybrook Health Care Centre",
    address: "2075 Bayview Ave, Toronto, ON M4N 3M5",
    distance: 5,
  },
  {
    name: "Hospital 2",
    address: "Address 2",
    distance: 10,
  },
  {
    name: "Hospital 3",
    address: "Address 3",
    distance: 15,
  },
  {
    name: "Hospital 4",
    address: "Address 4",
    distance: 15,
  },
  {
    name: "Hospital 5",
    address: "Address 5",
    distance: 17,
  },
];

const useHospitalList = () => {
  const [hospitalList, setHospitalList] = useState(hospitals);
  const { address } = useContext(GlobalContext);

  useEffect(() => {
    setHospitalList(
      hospitalList.filter((hospital) => {
        return hospital.address.includes(address);
      })
    );
  }, [address, hospitalList]);

  return hospitalList;
};

export default useHospitalList;
