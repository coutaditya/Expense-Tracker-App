import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value);    // 1st way (preffered)
    // setUserInput({                          // 2nd way (but whenever we copy states from previous, always use anonymous arrow function(as below))
    //   ...userInput,                         // This might not work when multiple updates are made at same time as sometimes an outdated version of prev states may be used
    //   enteredTitle:event.target.value
    // })

    // setEnteredTitle((prevState) => {           // This method ensures that always latest version of states is passed in the function
    //   return { ...prevState, enteredTitle: event.target.value};
    // })
  };

  const amountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // })
  };

  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // })
  }; 

  const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData = {
      title : enteredTitle,
      amount : +enteredAmount,
      date : new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);

    // console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;