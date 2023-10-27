import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, Currency } = useContext(AppContext);
  const [budget, setBudget] = useState("");

  const handleBudgetChange = (event) => {
    if(event.target.value>20000)
    {
            alert("The budget cannot exceed 20000");
            setBudget(" ")
            return;
    }
    console.log("new budget:", event.target.value);
    setBudget(parseInt(event.target.value));
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      console.log("enter key pressed");
      dispatch({ type: "SET_BUDGET", payload: budget });
    }
  };

  return (
    <div className="alert alert-secondary">
      <label htmlFor="cost">Budget: {Currency}</label>
      <input
        required
        type="number"
        id="cost"
        step="10"
        value={budget}
        style={{ marginLeft: "2rem", width: "10rem" }}
        onChange={handleBudgetChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Budget;