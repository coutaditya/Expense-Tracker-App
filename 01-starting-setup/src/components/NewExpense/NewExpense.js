import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expense = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expense);
        // console.log(expense);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
    </div>
};

export default NewExpense;

//NOTE: To move data up (from child to parent), we can pass functions as props in the parent to the child and then use the data in the function in the child component