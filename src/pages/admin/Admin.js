/** @format */

import {
  CButton,
  CContainer,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import HeaderBody from "../../common/HeaderBody";

const section_1 = [
  {
    name: "data 1",
    data: [
      {
        name: "select 1",
        value: 1,
      },
      {
        name: "select 2",
        value: 2,
      },
      {
        name: "select 3",
        value: 3,
      },
    ],
  },
  {
    name: "data 2",
    data: [
      {
        name: "select 21",
        value: 21,
      },
      {
        name: "select 22",
        value: 22,
      },
      {
        name: "select 23",
        value: 23,
      },
    ],
  },
];
const section_2 = [];
const section_3 = {
  data: [
    {
      name: "ID",
      value: 1,
    },
    {
      name: "Name",
      value: 2,
    },
    {
      name: "Phone number",
      value: 3,
    },
  ],
};
const header = {
  name: "Admin",
  // button: [
  //   {
  //     name: "Provide/Subtract point",
  //   },
  //   {
  //     name: "Provide/Subtract point",
  //   },
  // ],
};
const contentTable = [1, 2, 3, 4, 5, 6, 7, 9, 10];
function Admin() {
  return (
    <div style={{ height: "1000px" }}>
      Admin
      <HeaderBody header={header} section_3={section_3} />
      <CContainer fluid className="mt-5">
        <CTable hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell color="dark" scope="col">
                #
              </CTableHeaderCell>
              <CTableHeaderCell color="dark" scope="col">
                ID
              </CTableHeaderCell>
              <CTableHeaderCell color="dark" scope="col">
                Name
              </CTableHeaderCell>
              <CTableHeaderCell color="dark" scope="col">
                Mobile number
              </CTableHeaderCell>
              <CTableHeaderCell color="dark" scope="col">
                Created date
              </CTableHeaderCell>
              <CTableHeaderCell color="dark" scope="col"></CTableHeaderCell>
              <CTableHeaderCell color="dark" scope="col"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {contentTable.map((item) => {
              return (
                <CTableRow>
                  <CTableHeaderCell scope="row">{item}</CTableHeaderCell>
                  <CTableDataCell>12121</CTableDataCell>
                  <CTableDataCell>Admin</CTableDataCell>
                  <CTableDataCell>0121212332212</CTableDataCell>
                  <CTableDataCell>2021-02-10 14:50:55</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="light" className="cs-button">
                      Edit
                    </CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color="light" className="cs-button">
                      Change password
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              );
            })}
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  );
}
export default Admin;
