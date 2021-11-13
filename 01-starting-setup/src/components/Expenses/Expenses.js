import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearSelectHandler = (selection) => {
    setFilteredYear(selection);
    // console.log("Expenses.js");
    // console.log(selection);
  };

  const filteredExpenses = props.items.filter(
    (filteredExpense) =>
      filteredExpense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearSelect={yearSelectHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

// NOTE: If we use &&, then if the left condition is true then the right code gets returned. (This maybe used in place of conditionals)

export default Expenses;
