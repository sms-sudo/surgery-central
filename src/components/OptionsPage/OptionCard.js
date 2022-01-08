import React from "react";

const OptionCard = ({ hospitalName, hospitalAddress, distance }) => {
  return (
    <div className="card border-dark m-3 w-75">
      <div className="card-header d-flex flex-row-reverse ">
        {distance ? (
          <p className="text-primary">{distance} km away</p>
        ) : (
          <p className="p-2"> </p>
        )}
      </div>
      <div className="card-body d-flex flex-row justify-content-between">
        <div>
          <h4 className="card-title">{hospitalName}</h4>
          <p className="card-text">{hospitalAddress}</p>
        </div>
        <button className="btn btn-danger btn-sm text-sm font-weight-bold">
          Contact
        </button>
      </div>
    </div>
  );
};

export default OptionCard;
