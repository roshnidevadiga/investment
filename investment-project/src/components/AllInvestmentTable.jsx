import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { formatRupees } from "../utils/numberFormatter";

//define columns
const columns = [
    {
        field: "investment_name",
        headerName: "Investment name",
        flex: 2,
        minWidth: 300,
    },
    {
        field: "investment_amount",
        headerName: "Investment amount",
        flex: 1,
        minWidth: 200,
        valueFormatter: params => {
            return formatRupees(params.value);
        },
    },
    {
        field: "investment_date",
        headerName: "Date",
        flex: 1,
        minWidth: 200,
    },
    {
        field: "investment_type",
        headerName: "Investment type",
        flex: 1,
        minWidth: 200,
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
