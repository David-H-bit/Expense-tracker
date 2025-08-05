import React from "react";
import MoneyChart from "./MoneyChart";

function ChartSection({expensesForSelectedDate, balanceForSelectedDate}) {
    return (
        <section className="section-two">
            <div>
                <MoneyChart expenses={expensesForSelectedDate}/>
                <h2 style={{margin: "10px 0px"}}>Balance: ${balanceForSelectedDate}</h2>
            </div>
        </section>
    );
}

export default ChartSection;