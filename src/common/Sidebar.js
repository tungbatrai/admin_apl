/** @format */
import React, { useEffect, useState } from "react";
import {
  cilList,
  cilPuzzle,
  cilShieldAlt,
  cilSpeedometer,
  cilSquare,
  cilStar,
} from "@coreui/icons";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CBadge,
  CNavGroup,
  CNavItem,
  CCreateNavItem,
  CNavTitle,
  CSidebarToggler,
} from "@coreui/react";
import { NavLink, useNavigate } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { Link } from "react-router-dom";
function Sidebar() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <>
      <CSidebar className="sidebar">
        <CSidebarBrand>APL</CSidebarBrand>
        <CSidebarNav>
          <CNavItem>
            <NavLink tag={Link} to="/home" className="sidebar-navLink nav-link">
              Admin management
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink tag={Link} to="/body" className="sidebar-navLink nav-link">
              Admission ticket management
            </NavLink>
          </CNavItem>
          <CNavGroup toggler="Admission check management ">
            <CNavItem className="text-start">
              <NavLink
                tag={Link}
                to="/body"
                className="sidebar-navLink-chil nav-link"
              >
                Submitted ticket management
              </NavLink>
            </CNavItem>
            <CNavItem className="text-start">
              <NavLink
                tag={Link}
                to="/home"
                className="sidebar-navLink-chil nav-link"
              >
                Admission check verification code management item
              </NavLink>
            </CNavItem>
          </CNavGroup>
          <CNavItem>
            <NavLink tag={Link} to="/body" className="sidebar-navLink nav-link">
              Point management
            </NavLink>
          </CNavItem>

          <CNavGroup toggler="Product management">
            <CNavItem className="text-start">
              <NavLink
                tag={Link}
                to="/body"
                className="sidebar-navLink-chil nav-link"
              >
                Submitted ticket management
              </NavLink>
            </CNavItem>
            <CNavItem className="text-start">
              <NavLink
                tag={Link}
                to="/home"
                className="sidebar-navLink-chil nav-link"
              >
                Admission check verification code management item
              </NavLink>
            </CNavItem>
          </CNavGroup>
          <CNavItem>
            <NavLink tag={Link} to="/body" className="sidebar-navLink nav-link">
              Tournament management
            </NavLink>
          </CNavItem>
          <CNavItem>
            <NavLink tag={Link} to="/body" className="sidebar-navLink nav-link">
              Result detail management
            </NavLink>
          </CNavItem>

          <CNavGroup toggler="Member management">
            <CNavItem className="text-start">
              <NavLink
                tag={Link}
                to="/body"
                className="sidebar-navLink-chil nav-link"
              >
                Submitted ticket management
              </NavLink>
            </CNavItem>
            <CNavItem className="text-start">
              <NavLink
                tag={Link}
                to="/home"
                className="sidebar-navLink-chil nav-link"
              >
                Admission check verification code management item
              </NavLink>
            </CNavItem>
          </CNavGroup>
          <CNavGroup toggler="Content management">
            <CNavItem className="text-start">
              <NavLink
                tag={Link}
                to="/body"
                className="sidebar-navLink-chil nav-link"
              >
                Submitted ticket management
              </NavLink>
            </CNavItem>
            <CNavItem className="text-start">
              <NavLink
                tag={Link}
                to="/home"
                className="sidebar-navLink-chil nav-link"
              >
                Admission check verification code management item
              </NavLink>
            </CNavItem>
          </CNavGroup>
          <CNavGroup toggler="Statistics management">
            <CNavItem className="text-start">
              <NavLink
                tag={Link}
                to="/body"
                className="sidebar-navLink-chil nav-link"
              >
                Submitted ticket management
              </NavLink>
            </CNavItem>
            <CNavItem className="text-start">
              <NavLink
                tag={Link}
                to="/home"
                className="sidebar-navLink-chil nav-link"
              >
                Admission check verification code management item
              </NavLink>
            </CNavItem>
          </CNavGroup>
          <CNavGroup toggler="Promotion/ banner management ">
            <CNavItem className="text-start">
              <NavLink
                tag={Link}
                to="/body"
                className="sidebar-navLink-chil nav-link"
              >
                Submitted ticket management
              </NavLink>
            </CNavItem>
            <CNavItem className="text-start">
              <NavLink
                tag={Link}
                to="/home"
                className="sidebar-navLink-chil nav-link"
              >
                Admission check verification code management item
              </NavLink>
            </CNavItem>
          </CNavGroup>
        </CSidebarNav>
        <CSidebarToggler className="w-100" />
      </CSidebar>
    </>
  );
}
export default Sidebar;

function Menu() {
  return (
    <CNavItem className="text-start">
      <NavLink tag={Link} to="/home" className="sidebar-navLink-chil nav-link">
        Admission check verification code management item
      </NavLink>
    </CNavItem>
  );
}
function GroupMenu() {
  <CNavGroup toggler="Promotion/ banner management ">
    <CNavItem className="text-start">
      <NavLink tag={Link} to="/body" className="sidebar-navLink-chil nav-link">
        Submitted ticket management
      </NavLink>
    </CNavItem>
    <CNavItem className="text-start">
      <NavLink tag={Link} to="/home" className="sidebar-navLink-chil nav-link">
        Admission check verification code management item
      </NavLink>
    </CNavItem>
  </CNavGroup>;
}
