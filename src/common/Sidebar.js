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
import { sideBar } from "../router/sideBarPath";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { Link } from "react-router-dom";
function Sidebar() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [dataSideBar, setDataSideBar] = useState([]);
  useEffect(() => {
    setDataSideBar(sideBar);
  }, []);
  return (
    <>
      <CSidebar className={show ? "sidebar" : "negative-sidebar"}>
        <CSidebarBrand className="">APL</CSidebarBrand>
        <CSidebarNav>
          {dataSideBar.map((item) => {
            return (
              <>
                {item.type === 1 ? (
                  <Menu name={item.name} url={item.url} />
                ) : (
                  <GroupMenu name={item.name} url={item.url} chil={item.chil} />
                )}
              </>
            );
          })}
          {/* <GroupMenu /> */}
        </CSidebarNav>

        <CSidebarToggler className="w-100" />
      </CSidebar>
      {/* <Outlet  /> */}
    </>
  );
}
export default Sidebar;

function Menu({ name, url }) {
  return (
    <CNavItem className="text-start">
      <NavLink
        tag={Link}
        to={`${url}`}
        className="sidebar-navLink-chil nav-link"
      >
        {name}
      </NavLink>
    </CNavItem>
  );
}
function GroupMenu({ name, url, chil }) {
  return (
    <CNavGroup toggler={name}>
      {chil.map((item) => {
        return (
          <CNavItem className="text-start">
            <NavLink
              tag={Link}
              to={`${url}/${item.url}`}
              className="sidebar-navLink-chil nav-link"
            >
              {item.name}
            </NavLink>
          </CNavItem>
        );
      })}
    </CNavGroup>
  );
}
