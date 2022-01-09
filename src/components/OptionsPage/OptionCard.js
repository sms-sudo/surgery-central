import React, { useContext } from "react";
import { useHistory } from "react-router";
import { GlobalContext } from "../../contexts/GlobalContext";

const OptionCard = ({
  hospitalName,
  hospitalAddress,
  duration,
  priority1,
  priority2,
  priority3,
}) => {
  let history = useHistory();
  const { setHospitalId } = useContext(GlobalContext);

  const handleContact = () => {
    setHospitalId(hospitalName);
    history.push(`/contact/${hospitalName}`);
  };

  return (
    <div className="card border-dark m-3 w-75">
      <div className="card-header d-flex flex-row-reverse ">
        {duration ? (
          <p className="text-primary">{duration} away</p>
        ) : (
          <p className="p-2"> </p>
        )}
      </div>
      <div className="card-body d-flex flex-row justify-content-between p-4 align-items-center">
        <div>
          <h4 className="card-title">{hospitalName}</h4>
          <a
            className="card-text"
            href={"https://www.google.com/maps/place/" + hospitalAddress}
          >
            {hospitalAddress}
          </a>
          <div className="card-text text-danger mt-3">Wait Times</div>
          <div>
            Priority 2: {isNaN(priority1) ? priority1 : priority1 + " days"}
          </div>
          <div>
            Priority 3: {isNaN(priority2) ? priority2 : priority2 + " days"}
          </div>
          <div>
            Priority 4: {isNaN(priority3) ? priority3 : priority3 + " days"}
          </div>
        </div>
        <button
          className="btn btn-danger font-weight-bold h-50 me-3"
          onClick={handleContact}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default OptionCard;
