import React from "react";

const AddressBar = () => {
  return (
    <div class="d-flex form-group w-75 m-4">
      <input
        className="form-control form-control-lg w-75"
        placeholder="Enter your address..."
      />
      <button className="btn btn-info w-25">Search</button>
    </div>
  );
};

export default AddressBar;
