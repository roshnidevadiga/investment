//Form in react that will accept the investments and store them locally
import React from "react";
//import addInvestment api
import { addInvestment } from "../api/addInvestment";

//InvestmentForm functional component
const InvestmentForm = () => {
  //state for the form
  const [investment, setInvestment] = React.useState({
    investment_name: "",
    investment_amount: "",
    investment_date: "",
    investment_type: "",
    investment_description: "",
  });

  //setInvestment function to update the state
  const handleChange = (event) => {
    setInvestment({
      ...investment,
      [event.target.name]: event.target.value,
    });
  };

  //Call api on handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    addInvestment(investment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Investment name:
        <input type="text" name="investment_name" onChange={handleChange} />
      </label>
      <br />
      <label>
        Investment amount:
        <input type="number" name="investment_amount" onChange={handleChange} />
      </label>
      <br />
      <label>
        Investment date:
        <input type="date" name="investment_date" onChange={handleChange} />
      </label>
      <br />
      <label>
        Investment type:
        <select name="investment_type" onChange={handleChange}>
          <option value="">Select investment type</option>
          <option value="stock">Stock</option>
          <option value="mutual_fund">Mutual Fund</option>
          <option value="fd">Normal FD</option>
          <option value="rd">RD</option>
          <option value="tax_fd">Tax saving fd</option>
          <option value="lic">LIC</option>
          <option value="nps">NPS</option>
          <option value="smallcase">Small case</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Investment description:
        <textarea
          name="investment_description"
          onChange={handleChange}
        ></textarea>
      </label>
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default InvestmentForm;
