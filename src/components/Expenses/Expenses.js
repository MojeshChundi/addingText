import React, { useState } from "react";
import ExepenseItem from "./ExepenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
function Expenses() {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [filterYear, setSelectedYear] = useState("2020");

  const yearHandler = (selectedYear) => {
    console.log("Expense");
    setSelectedYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} SelectYear={yearHandler} />

      {expense.map((ele) => (
        <ExepenseItem date={ele.date} title={ele.title} amount={ele.amount} />
      ))}
    </Card>
  );
}
export default Expenses;
