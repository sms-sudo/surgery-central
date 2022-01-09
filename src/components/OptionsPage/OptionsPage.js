import { useContext, useState } from "react";
import OptionCard from "./OptionCard";
import AddressBar from "./AddressBar";
import useHospitalList from "../../hooks/useHospitalList";
import { GlobalContext } from "../../contexts/GlobalContext";

const OptionsPage = () => {
  const hospitals = useHospitalList();
  const [alertClasses, setAlertClasses] = useState(
    "alert alert-dismissible alert-warning w-75"
  );
  const { surgeryId } = useContext(GlobalContext);

  const onAlertClose = () => {
    setAlertClasses("d-none");
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="mt-4 text-left w-75">Results for {surgeryId}</h1>
      <AddressBar />

      <div className={alertClasses}>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          onClick={onAlertClose}
        ></button>
        <p className="mb-0">
          Patients with emergency conditions (Priority 1) are seen immediately
          and are not included in wait times data. Priority levels 2, 3, and 4
          and target times are set by surgeons, specialists, and health care
          administrators, based on clinical evidence, to guide treatment
          decisions and improve patient access and outcomes.
        </p>
      </div>

      {hospitals.map((hospital, index) => {
        return (
          <OptionCard
            hospitalName={hospital.name}
            hospitalAddress={hospital.address}
            duration={hospital.duration}
            key={index}
            priority1={hospital.priority1}
            priority2={hospital.priority2}
            priority3={hospital.priority3}
          />
        );
      })}
    </div>
  );
};

export default OptionsPage;
