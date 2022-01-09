import React, { useState } from "react";
import "./QueryPage.css";

import QueryIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import ToggleButtonExample from "./ToggleButtonExample";

function QueryPage({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="query">
      <ToggleButtonExample />
      <div className="queryInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="queryIcon">
          {wordEntered.length === 0 ? (
            <QueryIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="queryResult">
          {filteredData.map((value, key) => {
            return (
              <Link
                className="dataItem"
                to={`/options/${value.name}`}
                target="_blank"
              >
                <p>{value.name} </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default QueryPage;
