/** @format */

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
} from "react-router-dom";
import React from "react";
import Home from "./Home";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "@coreui/coreui/dist/css/coreui.min.css";
import Login from "../pages/Login";
import Body from "./Body";
import Admin from "../pages/admin/Admin";
import AdmissionTicket from "../pages/admissionTicket/AdmissionTicket";
function DefaultLayout() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          {/* <Route path="/" element={<Home />}> */}
          <Route path="*" element={<Home />}>
            {/* <Route path="admissionTicket" element={<AdmissionTicket />} />
            <Route path="admin" element={<Admin />} /> */}
            {/* <Route path="content" element={<Content />} />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<Navigate replace to="/" />} /> */}
          </Route>
        </Routes>
        {/* <Outlet /> */}
      </BrowserRouter>
    </>
  );
}
export default DefaultLayout;
