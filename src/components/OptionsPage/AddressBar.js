import React, { useState, useContext } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { GlobalContext } from "../../contexts/GlobalContext";

const AddressBar = () => {
  const [addressField, setAddressField] = useState("");
  const { setAddress } = useContext(GlobalContext);

  const onLoad = (autocomplete) => {
    setAddressField(autocomplete);
  };

  const search = () => {
    console.log("something");
    if (addressField !== null) {
      console.log(addressField.getPlace().formatted_address);
      setAddress(addressField.getPlace().formatted_address);
    }
  };

  return (
    <div className="d-flex form-group w-75 m-4">
      <Autocomplete onLoad={onLoad} onPlaceChanged={search} className="w-75">
        <input
          type="text"
          placeholder="Enter your address..."
          className="form-control form-control-lg"
        />
      </Autocomplete>
      <button className="btn btn-info w-25" onClick={search}>
        Search
      </button>
    </div>
  );
};

export default AddressBar;
