//Form in react that will accept the investments and store them locally
import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
//import addInvestment api
import { addInvestment } from "../api/addInvestment";
import { INVESTMENT_CATEGORY_TO_NAME_MAP } from "../constants/categories";

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

  const formRef = useRef(null);

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
    addInvestment({
      id: uuidv4(),
      ...investment,
    });
    formRef?.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
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
          {Object.keys(INVESTMENT_CATEGORY_TO_NAME_MAP).map((key) => (
            <option key={key} value={key}>
              {INVESTMENT_CATEGORY_TO_NAME_MAP[key]}
            </option>
          ))}
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
