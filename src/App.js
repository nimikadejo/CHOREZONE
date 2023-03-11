import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./Components/landing.js"
import Login from "./Components/login.js";
import Signup from "./Components/signup.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;