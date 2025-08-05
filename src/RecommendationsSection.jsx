import React from "react";

function RecommendationsSection({expensesForSelectedDate, balance, getRecommendations}) {
    return (
        <section className="section-three">
            <h1>Recommendations</h1>
            {getRecommendations(expensesForSelectedDate, balance).map((rec, index) => (
                <h4 key={index}>- {rec}</h4>
            ))}
        </section>
    );
}

export default RecommendationsSection;