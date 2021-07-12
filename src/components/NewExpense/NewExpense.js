import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {
    const [form, setForm] = useState('');

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const addNewExpenseHandler = (type = '') => {
        if(type === "Cancel") {
            setForm('');
        } else {
            setForm(<ExpenseForm onCancel={addNewExpenseHandler} onSaveExpenseData={saveExpenseDataHandler}/>);
        }
    };

    return (
        <div className="new-expense">
            {form.length === 0 ? <button onClick={addNewExpenseHandler}>Add new expense</button> : form}
        </div>
    );
};

export default NewExpense;