import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { formatRupees } from "../utils/numberFormatter";

//define columns
const columns = [
  { field: "investment_name", headerName: "Investment name", width: 300 },
  {
    field: "investment_amount",
    headerName: "Investment amount",
    width: 200,
    valueFormatter: (params) => {
      return formatRupees(params.value);
    },
  },
  {
    field: "investment_date",
    headerName: "Date",
  },
  {
    field: "investment_type",
    headerName: "Investment type",
    description: "This column has a value getter and is not sortable.",
  },
];

const AllInvestmentTable = () => {
  //Read data from local storage
  const investments = JSON.parse(localStorage.getItem("investments"));
  return (
    <>
      <h1>Welcome to my investment Table</h1>

      <div style={{ height: 400, width: "80%", margin: "0 auto" }}>
        <DataGrid
          rows={investments}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default AllInvestmentTable;
