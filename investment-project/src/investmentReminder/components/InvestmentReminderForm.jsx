//import react
import React from "react";
//import form controls
import FormControl from "@mui/material/FormControl";

const InvestmentReminderForm = ({reminderType}) => {
    return (
        <>
            <h2>Investment reminder Form</h2>
            <FormControl>
                <label>
                    Investment name:
                    <input type="text" />
                </label>
                <label>
                    Investment amount:
                    <input type="number" />
                </label>
                <label>
                    Investment date:
                    <input type="date" />
                </label>
                <label>
                    Investment type:
                    <select>
                        <option value="recurring">Recurring</option>
                        <option value="oneTime">One Time</option>
                    </select>
                </label>
            </FormControl>
        </>
    );
};

export default InvestmentReminderForm;
