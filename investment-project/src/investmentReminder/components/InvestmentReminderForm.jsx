//import react
import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
//import form controls
import FormControl from "@mui/material/FormControl";
import { REMINDER_TYPE_TO_TEXT } from "../../constants/reminderConstants";
import { setReminder } from "../api/reminderApi";

const InvestmentReminderForm = ({ reminderType }) => {
    const formik = useFormik({
        initialValues: {
            investment_name: "",
            investment_amount: "",
            investment_date: "",
            investment_type: reminderType,
        },
        onSubmit: (values, { resetForm }) => {
            setReminder(values);
            //reset formik
            resetForm();
            //reset html form
            formRef?.current.reset();
        },
    });

    useEffect(() => {
        //reset formik
        formik.resetForm();
        //reset html form
        formRef?.current.reset();
    }, [reminderType]);

    const formRef = useRef(null);

    return (
        <>
            <h2>Investment reminder Form</h2>
            <form onSubmit={formik.handleSubmit} ref={formRef}>
                <FormControl>
                    <label>
                        Investment name:
                        <input
                            type="text"
                            name="investment_name"
                            onChange={formik.handleChange}
                            value={formik.investment_name}
                        />
                    </label>
                    <label>
                        Investment amount:
                        <input
                            type="number"
                            name="investment_amount"
                            onChange={formik.handleChange}
                            value={formik.investment_amount}
                        />
                    </label>
                    <label>
                        Investment date:
                        <input
                            type="date"
                            name="investment_date"
                            onChange={formik.handleChange}
                            value={formik.investment_date}
                        />
                    </label>
                    <label>
                        Investment type:
                        {REMINDER_TYPE_TO_TEXT[reminderType]}
                        <input
                            type="hidden"
                            name="investment_type"
                            value={formik.investment_type}
                            onChange={formik.handleChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </FormControl>
            </form>
        </>
    );
};

export default InvestmentReminderForm;
