import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Liturgy from "./pages/Liturgy/Liturgy";
import Community from "./pages/Community/Community";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Join from "./pages/Join-scc/Join";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liturgy" element={<Liturgy />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-scc" element={<Join />} />
      </Routes>
    </>
  );
}

export default App;
