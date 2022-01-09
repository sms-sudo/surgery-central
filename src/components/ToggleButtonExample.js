import React, { useState, useContext } from "react";
import "./ToggleButtonExample.css";
import { GlobalContext } from "../contexts/GlobalContext";

function ToggleButtonExample() {
  const { setIsAdult } = useContext(GlobalContext);
  const [adultClasses, setAdultClasses] = useState("btn btn-outline-primary");
  const [childClasses, setChildClasses] = useState("btn btn-outline-primary");

  const onToggle = (isAdult) => {
    if (isAdult) {
      setAdultClasses("btn btn-outline-primary btn-primary text-light");
      setChildClasses("btn btn-outline-primary");
    } else {
      setChildClasses("btn btn-outline-primary btn-primary text-light");
      setAdultClasses("btn btn-outline-primary");
    }
    setIsAdult(isAdult);
  };

  return (
    <div class="text-center">
      <button class={adultClasses} onClick={() => onToggle(true)}>
        Adult
      </button>

      <button
        type="button"
        class={childClasses}
        onClick={() => onToggle(false)}
      >
        Child
      </button>
    </div>
  );
}
export default ToggleButtonExample;
