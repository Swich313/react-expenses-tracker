import {useState} from "react";

// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import './expenses.css';
import ExpensesList from "./ExpensesList";

const Expenses = props => {
    const expanses = props.items;
    const [filter, setFilter] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilter(selectedYear);
    };

    // const renderExpenses = (dataArray, activefilter) => {
    //     const filteredArray = dataArray.filter(item => item.date.getFullYear() === +activefilter);
    //     if(filteredArray.length === 0) {
    //         return (<div> No expenses Found!</div>)
    //     }
    //     return filteredArray.map(item => {
    //         return (
    //             <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
    //         );
    //     })
    // }

    const filteredExpenses = expanses.filter(expanses => {
        return expanses.date.getFullYear().toString() === filter;
    });

return (
<Card className="expenses">
    <ExpensesFilter selected={filter} onChangeFilter={filterChangeHandler}/>
    {/*{renderExpenses(expanses, filter) }*/}
    <ExpensesList filteredExpenses={filteredExpenses}/>
    {/*{filteredExpenses.length === 0 && <div>No Expenses Found!</div>}*/}
    {/*{filteredExpenses.length > 0 && filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)}*/}
    {/*{filteredExpenses.length === 0 ? <div>No Expenses Found!</div> : filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/> )}*/}

</Card>
);
}

export default Expenses;