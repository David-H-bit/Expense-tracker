import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function MoneyChart({expenses}){
    const totalSpent = expenses
                        .filter(e => e.amount < 0)
                        .reduce((sum, e) => sum + Math.abs(e.amount), 0);
    const totalEarned = expenses
                        .filter(e => e.amount > 0)
                        .reduce((sum, e) => sum + Math.abs(e.amount), 0);

    const data = {
        labels: ["Spent", "Earned"],
        datasets: [
            {
                data: [totalSpent, totalEarned],
                backgroundColor: ["#ff4d4d", "#4dff88"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: "#fff"
                },
            },
        },
    };

    return(
        <div style={{ width: "300px", height: "300px", margin: "auto" }}>
            <Doughnut data={data} options={options}/>
        </div>
    );
}

export default MoneyChart;