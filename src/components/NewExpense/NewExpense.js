import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  }

  const closeForm = () => {
    setShowForm(false);
  }
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={closeForm} />
      ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
