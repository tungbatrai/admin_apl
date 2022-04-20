/** @format */

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
      name: "type 1",
      value: 1,
    },
    {
      name: "type 2",
      value: 2,
    },
    {
      name: "type 3",
      value: 3,
    },
  ],
};

function Admin() {
  return (
    <div style={{ height: "1000px" }}>
      Admin
      <HeaderBody header="Admin" section_1={section_1} section_3={section_3} />
    </div>
  );
}
export default Admin;
