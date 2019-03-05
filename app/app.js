import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Header, Main, Hero, Timeline, Projects, Skills } from "./components";

const App = props => (
  <div>
    <Header />
    <Main />
    <Skills />
    <Projects />
    <Timeline />
  </div>
);

export default App;
