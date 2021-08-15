import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 289.45,
    date: new Date(2021, 2, 28),
  },
  { id: 2, title: "Computer", amount: 1122.45, date: new Date(2021, 2, 23) },
  { id: 3, title: "Toilet Paper", amount: 2.45, date: new Date(2021, 9, 6) },
  {
    id: 4,
    title: "Car Insurance",
    amount: 289.45,
    date: new Date(2021, 2, 28),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // const expenses = [
  //   {
  //     id: 1,
  //     title: "Car Insurance",
  //     amount: 289.45,
  //     date: new Date(2021, 2, 28),
  //   },
  //   { id: 2, title: "Computer", amount: 1122.45, date: new Date(2021, 2, 23) },
  //   { id: 3, title: "Toilet Paper", amount: 2.45, date: new Date(2021, 9, 6) },
  //   {
  //     id: 4,
  //     title: "Car Insurance",
  //     amount: 289.45,
  //     date: new Date(2021, 2, 28),
  //   },
  // ];
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <h2>Expense Board</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
