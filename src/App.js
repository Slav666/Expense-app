import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Expense Board</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
