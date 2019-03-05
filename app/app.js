import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Header, Main, Hero, Timeline, Projects } from "./components";

const App = props => (
  <div>
    <Header />
    <Main />
    <Projects />
    <Timeline />
  </div>
);

export default App;
