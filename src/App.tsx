import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection";
import Pokedex from "./pages/Pokedex";

import "./styles/index.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/collection" element={<Collection />} />
        <Route path="*" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
