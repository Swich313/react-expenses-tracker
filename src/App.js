import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {id: 1, title: 'Car Insurance', amount: 268.21, date: new Date(2022, 2, 12)},
    {id: 2, title: 'Toilet Paper', amount: 8.21, date: new Date(2022, 3, 12)},
    {id: 3, title: 'new TV', amount: 2618.21, date: new Date(2022, 4, 12)},
    {id: 4, title: 'Car maintenance', amount: 28.21, date: new Date(2021, 5, 12)},
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses(prevState => [expense, ...prevState]);
    };


    return (
   <div>
     <NewExpense onAddExpense={addExpenseHandler} />
     <Expenses items={expenses}/>
   </div>

  );
}

export default App;
