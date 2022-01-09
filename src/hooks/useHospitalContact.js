import { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import hospitalContactData from "../assets/hospital_contact_info.json";

const useHospitalContact = () => {
  const { hospitalId } = useContext(GlobalContext);
  const [contactInfo, setContactInfo] = useState({
    "COVID-19 info": "unityhealth.to",
    Address: "36 Queen St E, Toronto, ON M5B 1W8",
    Hours: "Open 24 hours",
    Phone: "(416) 360-4000",
    CEO: "Tim Rutledge (Mar 19, 2018\u2013)",
    "Number of beds": "463",
    Founder: "Sisters of St. Joseph",
    Founded: "1892",
    "Affiliated university": "Medical Sciences Building University of Toronto",
    Province: "Ontario",
  });

  useEffect(() => {
    setContactInfo({ ...hospitalContactData[hospitalId], name: hospitalId });
  }, [hospitalId]);

  return contactInfo;
};

export default useHospitalContact;
