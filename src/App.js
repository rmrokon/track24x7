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
import CreateTicket from "./components/Dashboard/CreateTicket";
import AllClients from "./components/Dashboard/AllClients";
import CreateTicketByClientName from "./components/Dashboard/CreateTicketByClientName";
import { createTheme, colors, ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: colors.teal[100],
    },
    secondary: {
      main: colors.cyan[500],
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <React.Fragment>
          <header>
            <Header></Header>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about-us" element={<AboutUs />}></Route>
              <Route path="/contact-us" element={<Contact />}></Route>


              <Route path="/dashboard" element={<RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>}>
                <Route index element={<Issues></Issues>}></Route>
                <Route path="issues" element={<Issues></Issues>}></Route>
                <Route path="add-client" index element={<AddClient></AddClient>}></Route>
                <Route path="reports" element={<Reports></Reports>}></Route>
                <Route path="create-ticket" element={<CreateTicket />}></Route>
                <Route path="create-ticket/:ticketForClient" element={<CreateTicketByClientName />}></Route>
                <Route path="clients" element={<AllClients />}></Route>
              </Route>


              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
          </main>
        </React.Fragment>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
