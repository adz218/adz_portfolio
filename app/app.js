import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Header, Hero } from "./components";

const App = props => (
  <div>
    <Header />
    <Hero />
  </div>
);

export default App;
