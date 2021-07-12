import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList"
import "./Expenses.css";

const Expenses = (props) => {
  const [chosenYear, setChosenYear] = useState("2020");

  const onSaveYear = (year) => {
    setChosenYear(year);
  };

  const filteredArray = props.expenses.filter(
    (el) => String(el.date.getFullYear()) === chosenYear
  );

  

  return (
    <Card className="expenses">
      <ExpensesFilter selected={chosenYear} onChosenYear={onSaveYear} />
      <ExpensesList filteredArray={filteredArray}/>
    </Card>
  );
};

export default Expenses;
