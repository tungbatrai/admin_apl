/** @format */
import React from "react";
// import {
//   CSidebar,
//   CSidebarBrand,
//   CSidebarNav,
//   CNavTitle,
//   CNavItem,
//   CBadge,
//   CNavGroup,
//   CSidebarToggler,
// } from "@coreui/react";
// import CSidebar from '@coreui/react/src/components/sidebar/CSidebar'
// import CSidebarBrand from '@coreui/react/src/components/sidebar/CSidebarBrand'
// import CSidebarNav from '@coreui/react/src/components/sidebar/CSidebarNav'

// import { cilSpeedometer, cilPuzzle } from '@coreui/icons';
// import { CIcon } from "@coreui/icons-react";
import {
  cilList,
  cilPuzzle,
  cilShieldAlt,
  cilSpeedometer,
} from "@coreui/icons";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CBadge,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebarToggler,
  CContainer,
  CRow,
  CCol,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import Sidebar from "../common/Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
function Home() {
  return (
    <div className="Home">
      {/* <Header />
      <Sidebar /> */}
      {/* <CContainer> */}
      <CRow className="align-item-start">
        <CCol xs={1} className="home-slide-bar">
          {" "}
          <Sidebar />
        </CCol>

        <CCol className="home-content">
          <Header />
        </CCol>
      </CRow>
      {/* </CContainer> */}
        <Outlet />
    </div>
  );
}
export default Home;
