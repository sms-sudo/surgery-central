import React, { useEffect, useContext } from "react";
import OptionCard from "./OptionCard";
import AddressBar from "./AddressBar";
import { GlobalContext } from "../../contexts/GlobalContext";
import useHospitalList from "../../hooks/useHospitalList";

const OptionsPage = () => {
  const { address } = useContext(GlobalContext);

  const hospitals = useHospitalList();

  // useEffect(() => {
  //   hospitals = hospitals.filter((hospital) => {
  //     hospital.address.includes(address);
  //   });
  // }, [address]);

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="mt-4 text-left w-75">Results for Shoulder Surgery</h1>

      <AddressBar />
      {hospitals.map((hospital, index) => {
        return (
          <OptionCard
            hospitalName={hospital.name}
            hospitalAddress={hospital.address}
            distance={hospital.distance}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default OptionsPage;
