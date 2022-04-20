/** @format */

import React, { useState } from "react";
import {
  CHeader,
  CContainer,
  CHeaderBrand,
  CHeaderToggler,
  CCollapse,
  CHeaderNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CForm,
  CFormInput,
  CButton,
  CListGroupItem,
  CListGroup,
} from "@coreui/react";
function Header() {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);
  return (
    <>
      <CHeader className="pdl-10 fix-top ">
        <CContainer fluid>
          {/* <CHeaderBrand href="#">Header</CHeaderBrand> */}
          <CHeaderToggler onClick={() => setVisible(!visible)} />

          <CCollapse
            className="header-collapse user-icon"
            visible={visible}
            onClick={() => setShow(!show)}
          >
            <CButton color="primary" className="circle">
              user
            </CButton>
            {show && (
              <>
                <CListGroup className="user-menu mt-1 text-start">
                  <CListGroupItem color="dark">Account</CListGroupItem>
                  <CListGroupItem component="a" href="#">
                    Update
                  </CListGroupItem>
                  <CListGroupItem component="a" href="#">
                    Messages
                  </CListGroupItem>
                  <CListGroupItem component="a" href="#">
                    Task
                  </CListGroupItem>
                  <CListGroupItem component="a" href="#">
                    Comment
                  </CListGroupItem>
                  <CListGroupItem color="dark">Settings</CListGroupItem>
                  <CListGroupItem component="a" href="#">
                    Profile
                  </CListGroupItem>
                  <CListGroupItem component="a" href="#">
                    language
                  </CListGroupItem>
                  <CListGroupItem className="px-2" color="dark">
                    <div class="dropdown-divider "></div>
                  </CListGroupItem>
                  <CListGroupItem component="a" href="#">
                    Lock Account
                  </CListGroupItem>
                  <CListGroupItem component="a" href="#">
                    Logout
                  </CListGroupItem>
                </CListGroup>
              </>
            )}
          </CCollapse>
        </CContainer>
      </CHeader>
    </>
  );
}
export default Header;
