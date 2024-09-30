import React, { useState } from "react";
import { Space, Switch, Table } from "antd";

const columns = [
  {
    title: "Packages",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Rate (in sqft)",
    dataIndex: "rate",
    key: "rate",
    width: "20%",
    render: (text, record) =>
      record.type === "civil" || record.type === "activity" ? text : "",
  },
  {
    title: "Total",
    dataIndex: "total",
    width: "30%",
    key: "total",
    render: (text, record) =>
      record.type === "civil" || record.type === "activity" ? text : "",
  },
];

const data = [
  {
    key: "1",
    name: "Civil 1",
    type: "civil", // type added to determine rendering logic
    rate: 567.8,
    total: 2986792,
    children: [
      {
        key: "1-1",
        name: "Activity 1",
        type: "activity", // type added
        rate: 567.8,
        total: 2986792,
        children: [
          {
            key: "1-1-1",
            name: "Work Item 1",
            type: "workitem", // type added
          },
          {
            key: "1-1-2",
            name: "Work Item 2",
            type: "workitem", // type added
          },
          {
            key: "1-1-3",
            name: "Work Item 3",
            type: "workitem", // type added
          },
        ],
      },
      {
        key: "1-2",
        name: "Activity 2",
        type: "activity", // type added
        rate: 567.8,
        total: 2986792,
        children: [
          {
            key: "1-2-1",
            name: "Work Item 1",
            type: "workitem", // type added
          },
          {
            key: "1-2-2",
            name: "Work Item 2",
            type: "workitem", // type added
          },
          {
            key: "1-2-3",
            name: "Work Item 3",
            type: "workitem", // type added
          },
        ],
      },
      {
        key: "1-3",
        name: "Activity 3",
        type: "activity", // type added
        rate: 567.8,
        total: 2986792,
        children: [
          {
            key: "1-3-1",
            name: "Activity 4",
            type: "activity", // type added
            rate: 567.8,
            total: 2986792,
          },
        ],
      },
    ],
  },
];

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

const DataTable = () => {
  return (
    <>
      <Table
        columns={columns}
        rowSelection={{
          ...rowSelection,
        }}
        dataSource={data}
        defaultExpandAllRows={true}
      />
    </>
  );
};

export default DataTable;
