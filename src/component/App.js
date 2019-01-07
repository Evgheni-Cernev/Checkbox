import React from "react";
import Number from "./Number";

function App() {
  return (
    <div className="wraper">
      <Number className="counter" defaultValue={3} min={0} max={8} />
    </div>
  );
}
export default App;
