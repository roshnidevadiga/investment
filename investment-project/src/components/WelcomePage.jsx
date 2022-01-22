//Dashboard component of investment application
import React, { useState } from "react";
//Create routes using react router
//https://reacttraining.com/react-router/web/example/basic
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import InvestmentForm from "./InvestmentForm";
import AllInvestmentTable from "./AllInvestmentTable";
import InvestmentSummary from "./InvestmentSummary";

const WelcomePage = () => {
  return (
    <>
      <h1>Welcome to my investment Dashboard</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addInvestmet">Add investment</Link>
          </li>
          <li>
            <Link to="/viewInvestments">View all investments</Link>
          </li>
          <li>
            <Link to="/viewInvestmentSummary">View investment summary</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addInvestmet" element={<InvestmentForm />} />
          <Route path="/viewInvestments" element={<AllInvestmentTable />} />
          <Route
            path="/viewInvestmentSummary"
            element={<InvestmentSummary />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default WelcomePage;
