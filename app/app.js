import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

function App({ initialCount }) {
  initialCount = 0;
  const [count, setState] = useState(initialCount);

  useEffect(() => {
    console.log("count at state change", count);
  });

  return (
    <Fragment>
      <button
        onClick={async () => {
          const get = await axios.get(
            `https://authorization.api.npr.org/v2/authorize?client_id=nprone_trial_g9y0aDqcdDjs&state=eft68jrd3r74fpc7Grni&redirect_uri=https://secure.npr.org/oauth2/login&response_type=code&scope=identity.readonly`
          );
          const response = await axios.post(
            `https://authorization.api.npr.org/v2/token?client_id=nprone_trial_g9y0aDqcdDjs&client_secret=BKCpDdrFyHuhixA8zqf61MWNFDHw6IXu09ZFjG4k&grant_type=authorization_code`
          );
        }}
      >
        asdf
      </button>
      Count: {count}
      <button onClick={() => setState(initialCount)}>Reset</button>
      <button onClick={() => setState(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setState(prevCount => prevCount - 1)}>-</button>
    </Fragment>
  );
}

export default App;
