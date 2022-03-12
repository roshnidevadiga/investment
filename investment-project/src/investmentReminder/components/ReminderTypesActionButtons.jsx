//React component showing two buttons for investment reminder types
import React, {useState} from "react";
//import mui buttons
import Button from "@mui/material/Button";
import InvestmentReminderForm from "./InvestmentReminderForm";
import { REMINDER_TYPE_RECURRING, REMINDER_TYPE_ONE_TIME } from "../../constants/reminderConstants";

const ReminderTypesActionButtons = () => {
    const [reminderType, setReminderType] = useState("");
    const onClick = ({ type }) => {
        setReminderType(type);
    };
    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    onClick({ type: REMINDER_TYPE_RECURRING });
                }}>
                Recurring Investment
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    onClick({ type: REMINDER_TYPE_ONE_TIME });
                }}>
                One Time Investment
            </Button>
            {
                reminderType && <InvestmentReminderForm reminderType={reminderType} />
            }
        </>
    );
};

export default ReminderTypesActionButtons;
