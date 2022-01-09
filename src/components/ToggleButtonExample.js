import React, { useState } from "react";
import "./ToggleButtonExample.css";

function ToggleButtonExample() {
  // NOTE:
  // Return async function and change onclick button template to adult and child buttons with onclick event
  // Increment every time adult is used (positive and odd means its currently on adult -- since it starts off on adult)
  // decrement every time child is used (negative and even means its currently on child)
  //
  // const App = () => {
  //   const [count, setCount] = useState(0);
  //   return (
  //     <>
  //       <p>{count}</p>
  //       <button onClick={() => setCount(count + 1)}>Increment</button>
  //       <button onClick={() => setCount(count - 1)}>Decrement</button>
  //     </>
  //   );
  // };

  return (
    <div class="text-center">
      <button type="button" class="btn btn-outline-primary" id="adult">
        Adult
      </button>

      <button type="button" class="btn btn-outline-primary" id="child">
        Child
      </button>
    </div>
  );
}
export default ToggleButtonExample;
