import React from "react";
import ExpenseItem from "./ExpenseItem";
import Modal from "./Modal";

function ExpensesSection({expenses, balance, onAddExpense, onEditExpense, onDeleteExpense, isModalOpen, setIsModalOpen, editingExpense, setEditingExpense, handleSave}) {
    return (
        <section className="section-one">
            <h1 style={{fontSize: "2rem"}}>Expenses</h1>
            <button onClick={() => setIsModalOpen(true)}>Add expense</button>
            <h2 style={{margin: "10px 0px"}}>Balance: ${balance}</h2>
            <ul className="expenses-list">
                {expenses.map(exp => 
                    <ExpenseItem 
                        key={exp.id} 
                        expense={exp}
                        onEdit={(expense) => {setEditingExpense(expense); setIsModalOpen(true)}}
                        onDelete={onDeleteExpense}
                    />
                )}
            </ul>
            {isModalOpen && <Modal
                onClose={() => {setIsModalOpen(false); setEditingExpense(null)}} 
                onConfirm={handleSave} 
                initialData={editingExpense || undefined}/>
            }
        </section>
    );
}

export default ExpensesSection;