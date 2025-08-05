import React from "react";

function Navigation({searchbar, query, onSearchToggle, dateInput, onDateToggle, selectedDate, onDateChange, formatDate, onQueryChange}) {
    return (
        <nav>
            <h1>Expense tracker</h1>
            <div className="nav-buttons">
                <div className="searchbar-div">
                    <button onClick={onSearchToggle}>🔎</button>
                    <input type="text" className={`searchbar ${searchbar ? "open" : ""}`} placeholder="search for expense" value={query} onChange={e => onQueryChange(e.target.value)}/> 
                </div>
                <div className="date-div">
                    <button onClick={onDateToggle}>{selectedDate ? formatDate(selectedDate) : "Select date"}</button>
                    <input id="date-inputId" type="month" className={`dateInput ${dateInput ? "open" : ""}`} value={selectedDate} onChange={onDateChange}/>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;