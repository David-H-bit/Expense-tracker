import React, {useState} from "react";

function Modal({onClose, onConfirm, initialData = {title: "", amount: "", category: ""}}){
    const [title, setTitle] = useState(initialData.title);
    const [amount, setAmount] = useState(initialData.amount);
    const [category, setCategory] = useState(initialData.category);

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>Add New Expense</h2>
                <div className="modal-mini-container">
                    <label htmlFor="">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="modal-mini-container">
                    <label htmlFor="">Expense</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <div className="modal-mini-container">
                    <label htmlFor="">Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select category</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Taxes">Taxes</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={() => onConfirm({title, amount, category})}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;