import React from "react";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import AddClient from "./components/Dashboard/AddClient";
import Issues from "./components/Dashboard/Issues";
import Reports from "./components/Dashboard/Reports";
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import RequireAuth from "./components/Authentication/RequireAuth";


function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <header>
          <Header></Header>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/contact" element={<Contact />}></Route>


            <Route path="/dashboard" element={<RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>}>
              <Route path="addClient" element={<AddClient></AddClient>}></Route>
              <Route path="issues" element={<Issues></Issues>}></Route>
              <Route path="reports" element={<Reports></Reports>}></Route>
            </Route>


            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        </main>
      </React.Fragment>
    </Provider>
  );
}

export default App;
