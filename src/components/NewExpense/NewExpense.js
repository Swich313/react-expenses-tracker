import ExpenseForm from "./ExpenseForm";
import Button from "../UI/Button";

import './newExpense.css';
import {useState} from "react";

const NewExpense = props => {
    const [openModal, setOpenModal] = useState(false);
    const saveExpenseDataHandler = enteredData => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    };

    const addNewExpensesHandler = e => {
        setOpenModal(true)
    };

    const closeModalHandler = () => {
        setOpenModal(false);
    }

    return (
            <div className="new-expense">
                {!openModal && <Button type="button" onClick={addNewExpensesHandler}>Add New Expense</Button>}
                {openModal && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseModal={closeModalHandler}/>}
            </div>
    );
}

export default NewExpense;