import { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import hospitalContactData from "../assets/hospital_contact_info.json";

const useHospitalContact = () => {
  const { hospitalId } = useContext(GlobalContext);
  const [contactInfo, setContactInfo] = useState();

  useEffect(() => {
    setContactInfo({ ...hospitalContactData[hospitalId], name: hospitalId });
  }, [hospitalId]);

  return contactInfo;
};

export default useHospitalContact;
