import React from "react";
import MoneyChart from "./MoneyChart";

function ChartSection({expenses, balance}) {
    return (
        <section className="section-two">
            <div>
                <MoneyChart expenses={expenses}/>
                <h2 style={{margin: "10px 0px"}}>Balance: ${balance}</h2>
            </div>
        </section>
    );
}

export default ChartSection;