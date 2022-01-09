import React, { useState, useContext } from "react";
import "./QueryPage.css";
import { useHistory } from "react-router-dom";
import ToggleButtonExample from "./ToggleButtonExample";
import { GlobalContext } from "../contexts/GlobalContext";

function QueryPage({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  let history = useHistory();
  const { setSurgeryId } = useContext(GlobalContext);

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

  const handleQuery = (surgeyrName) => {
    setSurgeryId(surgeyrName);
    history.push(`/options/${surgeyrName}`);
  };

  return (
    <div className="query d-flex flex-column">
      <ToggleButtonExample />
      <div>
        <div className="queryInputs">
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="queryIcon">
            {wordEntered.length === 0 ? (
              <button className="btn btn-outline-primary">?</button>
            ) : (
              <button className="btn btn-outline-primary" onClick={clearInput}>
                X
              </button>
            )}
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="queryResult">
            {filteredData.map((value, key) => {
              return (
                <div
                  className="dataItem"
                  target="_blank"
                  onClick={() => handleQuery(value.name)}
                >
                  <p>{value.name} </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default QueryPage;
