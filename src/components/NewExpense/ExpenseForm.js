import {useState} from "react";

import Button from "../UI/Button";

import './expenseForm.css';

const ExpenseForm = props => {
    const {onCloseModal} = props;
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = e => {
        setTitle(e.target.value);

    };

    const amountChangeHandler = e => {
        setAmount(e.target.value);
    };

    const dateChangeHandler = e => {
        setDate(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();
        const expenseData = {
            title,
            amount: +amount,
            date: new Date(date),
        };
        props.onSaveExpenseData(expenseData)
        setTitle('');
        setAmount('');
        setDate('');

    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-01-01" max="2024-12-31" lang="en-US" value={date} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <Button type="button" onClick={onCloseModal}>Cancel</Button>
                <Button type="submit">Add expense</Button>
            </div>
        </form>
    );
}

export default ExpenseForm;