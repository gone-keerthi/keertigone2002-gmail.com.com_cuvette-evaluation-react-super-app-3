import { Routes, Route, Router, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import Movies from "./pages/Movies";
import Browse from "./pages/Browse";
import React from "react";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;