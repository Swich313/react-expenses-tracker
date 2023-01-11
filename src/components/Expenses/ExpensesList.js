import ExpenseItem from "./ExpenseItem";

import './expensesList.css';

const ExpensesList = props => {
    const {filteredExpenses} = props;
return (
    <ul className="expenses-list">
        {filteredExpenses.length === 0 && <h2 className="expenses-list__fallback">No Expenses Found!</h2>}
        {filteredExpenses.length > 0 && filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)}
</ul>
);
}

export default ExpensesList;