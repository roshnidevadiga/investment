//api to store form data in localstorage

const MOCK_MODE = true;

export const addInvestment = (currentInvestment) => {
  if(MOCK_MODE){
    console.log(currentInvestment);
    //set this data in localstorage if not present , else append to existing data
    let investments = JSON.parse(localStorage.getItem('investments')) || [];
    investments.push(currentInvestment);
    localStorage.setItem('investments', JSON.stringify(investments));
  } else {
    // return (dispatch) => {
  //   dispatch({ type: ADD_INVESTMENT });
  //   fetch("http://localhost:3000/investments", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(investment),
  //   })
  //     .then((res) => res.json())
  //     .then((investment) => {
  //       dispatch({ type: ADD_INVESTMENT_SUCCESS, payload: investment });
  //     });
  // };
  }
  
  
};
