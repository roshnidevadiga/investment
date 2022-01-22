import React from "react";

const AllInvestmentTable = () => {
    //Read data from local storage
    const investments = JSON.parse(localStorage.getItem("investments"));
    return (
        <>
        <h1>Welcome to my investment Table</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {investments.map((investment) => (
                    <tr key={investment.id}>
                        <td>{investment.investment_name}</td>
                        <td>{investment.investment_amount}</td>
                        <td>{investment.investment_date}</td>
                        <td>{investment.investment_type}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
    }

export default AllInvestmentTable;