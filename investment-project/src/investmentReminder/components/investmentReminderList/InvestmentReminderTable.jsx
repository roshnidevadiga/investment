//investment reminder table component
import React, { useEffect } from "react";
//import uuid
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import { getReminders } from "../../api/reminderApi";

const InvestmentReminderTable = ({}) => {
    const [reminders, setReminders] = React.useState([]);
    useEffect(() => {
        const response = getReminders();
        setReminders(response);
    }, []);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Investment Name</TableCell>
                        <TableCell>Investment Amount</TableCell>
                        <TableCell>Investment Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reminders.map(row => (
                        <TableRow
                            key={row.id}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.investment_name}
                            </TableCell>
                            <TableCell>{row.investment_amount}</TableCell>
                            <TableCell>{row.investment_date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default InvestmentReminderTable;
