/** @format */

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
function HeaderBody(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className="header-body">
      <CRow>
        <CCol xs={4}>
          <CRow className="h-80">
            <div className="d-flex align-items-center justify-content-center">
              <h3>{props.header}</h3>
            </div>
          </CRow>
          <CRow>
            <div className="d-flex align-items-center justify-content-start">
              <div className="pe-2">Total 50 result</div>
              <CButton className="b-body-header px-1">
                Provide/Subtract point
              </CButton>
            </div>
          </CRow>
        </CCol>
        <CCol xs={8} className="text-start header-search ">
          {/* date */}

          <CRow className="pt-1">
            <CCol xs={11}>
              <CRow className="pt-3">
                <CCol className="">
                  <div class="d-flex bd-highlight">
                    {props.section_1.map((item, index) => {
                      return (
                        <>
                          <div class="p-1 d-flex align-items-center justify-content-center bd-highlight w-100p">
                            {item.name}
                          </div>
                          <div class="p-1 bd-highlight w-155p">
                            <CFormSelect
                              size="sm"
                              className="header-select border-radius5"
                              aria-label="Small select example"
                            >
                              <option>select</option>
                              {item.data.map((item_map, i) => {
                                return (
                                  <option value={item_map.value} key={i}>
                                    {item_map.name}
                                  </option>
                                );
                              })}
                            </CFormSelect>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CForm className="ps-1 ms-1">
                  <div className="">
                    <div className="d-flex align-content-center bd-highlight ">
                      <div className="d-flex align-items-center justify-content-center bd-highlight px-1 w-104p min-width104p">
                        Created date
                      </div>
                      <div className="d-flex align-items-center px-1 bd-highlight w-165p">
                        <CFormInput type="date" />
                      </div>
                      <div className="d-flex align-items-center justify-content-center bd-highlight pe-1 w-100p">
                        End date
                      </div>
                      <div className="d-flex align-items-center px-1 bd-highlight w-165p">
                        <CFormInput type="date" />
                      </div>
                      <div className="p-1 bd-highlight">
                        <CButton style={{ width: "45px" }}>All</CButton>
                      </div>
                      <div className="p-1 bd-highlight">
                        <CButton style={{ width: "63px" }}>Today</CButton>
                      </div>
                      <div className="p-1 bd-highlight">
                        <CButton style={{ width: "87px" }}>1 month</CButton>
                      </div>
                      <div className="p-1 bd-highlight">
                        <CButton style={{ width: "88px" }}>3 months</CButton>
                      </div>
                      <div className="p-1 bd-highlight">
                        <CButton style={{ width: "88px" }}>6 months</CButton>
                      </div>
                    </div>
                  </div>
                </CForm>
              </CRow>

              <CRow className="">
                <CCol className="">
                  <div class="d-flex bd-highlight">
                    <div class="p-1 d-flex align-items-center bd-highlight w-100p"></div>
                    <div class="p-1 bd-highlight w-155p">
                      <CFormSelect
                        size="sm"
                        className="header-select border-radius5"
                        aria-label="Small select example"
                      >
                        <option>select</option>
                        {props.section_3.data.map((item, index) => {
                          return (
                            <>
                              <option value={item.value}>{item.name}</option>
                            </>
                          );
                        })}
                      </CFormSelect>
                    </div>

                    <div class="p-1 bd-highlight w-50">
                      <CFormInput type="text" />
                    </div>
                  </div>
                </CCol>
              </CRow>
            </CCol>
            <CCol xs={1} className="p-1 d-flex align-items-center justify-content-center">
              <CButton className="mt-2">Search</CButton>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </div>
  );
}
export default HeaderBody;
