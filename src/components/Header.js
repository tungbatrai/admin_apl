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
} from "@coreui/react";
function Header() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <CHeader className="pdl-10 fix-top ">
        <CContainer fluid>
          {/* <CHeaderBrand href="#">Header</CHeaderBrand> */}
          <CHeaderToggler onClick={() => setVisible(!visible)} />

          <CCollapse className="header-collapse" visible={visible}>

          <CButton color="primary" className="circle">user</CButton>
          </CCollapse>
        </CContainer>
      </CHeader>
    </>
  );
}
export default Header;
