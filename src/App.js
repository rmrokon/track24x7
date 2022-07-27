import React from "react";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  return (
    <React.Fragment>
      <header>
        <Header></Header>
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
