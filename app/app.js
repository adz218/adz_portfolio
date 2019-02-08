import React, { useState, Fragment } from "react";
import axios from "axios";

function App({ initialCount }) {
  initialCount = "c";
  const [count, setState] = useState(initialCount);
  return (
    <Fragment>
      Count: {count}
      <button onClick={() => setState(initialCount)}>Reset</button>
      <button onClick={() => setState(prevCount => prevCount + "a")}>+</button>
      <button onClick={() => setState(prevCount => prevCount + "b")}>-</button>
    </Fragment>
  );
}

export default App;
