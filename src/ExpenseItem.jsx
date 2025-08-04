import React from "react";

function ExpenseItem({expense, onEdit, onDelete}) {
    return (
        <li className="expense-list-li">
            <span>{expense.title} - ${expense.amount} [{expense.category || "Uncategorized"}]</span>
            <button onClick={() => onEdit(expense)}>Edit</button>
            <button onClick={() => onDelete(expense.id, expense.amount)}>Delete</button>
        </li>
    );
}

export default ExpenseItem;