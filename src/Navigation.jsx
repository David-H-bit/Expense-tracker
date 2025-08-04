import React from "react";

function Navigation({searchbar, onSearchToggle, dateInput, onDateToggle, selectedDate, onDateChange, formatDate}) {
    return (
        <nav>
            <h1>Expense tracker</h1>
            <div className="nav-buttons">
                <div className="searchbar-div">
                    <button onClick={onSearchToggle}>🔎</button>
                    <input type="text" className={`searchbar ${searchbar ? "open" : ""}`} placeholder="search for expense" />
                </div>
                <div className="date-div">
                    <button onClick={onDateToggle}>{selectedDate ? formatDate(selectedDate) : "Select date"}</button>
                    <input id="date-inputId" type="month" className={`dateInput ${dateInput ? "open" : ""}`} value={selectedDate} onChange={onDateChange}/>
                </div>
                <button>Filter</button>
            </div>
        </nav>
    );
}

export default Navigation;