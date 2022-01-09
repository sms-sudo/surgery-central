import { GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";
import useHospitalContact from "../hooks/useHospitalContact";

function ContactPage() {
  const contactInfo = useHospitalContact();

  return (
    <div className="d-flex flex-column align-items-center w-100 m-4">
      <div className="card w-75 p-4">
        <h3 className="card-title mb-4">{contactInfo.name}</h3>
        <GoogleMap
          mapContainerStyle={{
            height: "400px",
            width: "100%",
            marginBottom: "10px",
          }}
          zoom={14}
          center={{
            lat: 37.772,
            lng: -122.214,
          }}
        >
          <Marker
            position={{
              lat: 37.772,
              lng: -122.214,
            }}
            label={"H"}
          />
        </GoogleMap>
        <div className="card-body d-flex flex-row justify-content-between">
          <div className="mx-3">
            <div className="card-text text-primary mb-1">Contact Info</div>
            {contactInfo["Address"] && (
              <div className="card-text">
                Address:{" "}
                <a
                  className="card-text text-info"
                  href={
                    "https://www.google.com/maps/place/" +
                    contactInfo["Address"]
                  }
                >
                  {contactInfo["Address"]}
                </a>
              </div>
            )}
            {contactInfo["Phone"] && (
              <div className="card-text">Phone: {contactInfo["Phone"]}</div>
            )}
            {contactInfo["Hours"] && (
              <div className="card-text">{contactInfo["Hours"]}</div>
            )}
          </div>
          <div className="mx-3">
            <div className="card-text text-primary mb-1">Additional Info</div>
            {contactInfo["COVID-19 info"] && (
              <div className="card-text">
                COVID-19 Info:{" "}
                <a
                  className="card-text text-info"
                  href={contactInfo["COVID-19 info"]}
                >
                  {contactInfo["COVID-19 info"]}
                </a>
              </div>
            )}
            {contactInfo["Emergency room"] && (
              <div className="card-text">
                Emergency Rooms: {contactInfo["Emergency room"]}
              </div>
            )}
            {contactInfo["Care system"] && (
              <div className="card-text">{contactInfo["Care system"]}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
