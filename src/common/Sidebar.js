/** @format */
import React from "react";
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
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
function Sidebar() {
  return (
    <>
      <CSidebar style={{ height: "100vh" }}>
        <CSidebarBrand>APL</CSidebarBrand>
        <CSidebarNav>
          {/* <CNavTitle>Nav Title</CNavTitle> */}
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            Home
          </CNavItem>
          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            With badge
            <CBadge color="primary ms-auto">NEW</CBadge>
          </CNavItem>
          <CNavGroup toggler="Nav dropdown">
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown
              item
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown
              item
            </CNavItem>
          </CNavGroup>
        </CSidebarNav>
        <CSidebarToggler />
      </CSidebar>
    </>
  );
}
export default Sidebar;
