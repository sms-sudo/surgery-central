import React from "react";
import OptionCard from "./OptionCard";
import AddressBar from "./AddressBar";

const OptionsPage = () => {
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
