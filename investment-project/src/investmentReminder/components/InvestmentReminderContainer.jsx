//Investment reminder container component
import React from "react";
//import react router routes
//import ReminderTypesActionButtons component
//import button from mui
import Button from "@mui/material/Button";
import ReminderTypesActionButtons from "./ReminderTypesActionButtons";
import InvestmentReminderTable from "./investmentReminderList/InvestmentReminderTable";
const InvestmentReminderContainer = () => {
    const [showAllReminders, setShowAllReminders] = React.useState(false);
    const onClick = () => {
        setShowAllReminders(!showAllReminders);
    };
    return (
        <>
            <h2>Investment reminder Dashboard</h2>
            <ReminderTypesActionButtons />
            <Button variant="outlined" onClick={onClick}>
                View all reminders
            </Button>
            {showAllReminders && <InvestmentReminderTable />}
        </>
    );
};
//export
export default InvestmentReminderContainer;
