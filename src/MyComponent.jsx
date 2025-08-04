import React, {useState} from "react";
import Navigation from "./Navigation";
import ExpensesSection from "./ExpensesSection";
import ChartSection from "./ChartSection";
import RecommendationsSection from "./RecommendationsSection";

function MyComponent(){
    const [searchbar, setSearchbar] = useState(false);
    const [dateInput, setDateInput] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expenses, setExpenses] = useState([]);
    const [balance, setBalance] = useState(0);
    const [editingExpense, setEditingExpense] = useState(null);

    function addExpense(newExpense){
        if (!newExpense.title || !newExpense.amount) {
            alert("Please fill in the title and amount");
            return;
        }

        const expenseToAdd = {
            id: Date.now(),
            title: newExpense.title,
            amount: Number(newExpense.amount),
            category: newExpense.category || "Uncategorized",
        }

        setBalance(b => b += expenseToAdd.amount);
        setExpenses(e => [...e, expenseToAdd]);
        setIsModalOpen(false);
    }

    function searchbarToggle(){
        setSearchbar(!searchbar);
    }

    function dateInputToggle(){
        setDateInput(!dateInput);
    }

    function handleDateChange(e){
        setSelectedDate(e.target.value);
    }

    function formatDate(d){
        if (!d) return "";
        const [year, month] = d.split("-");
        const monthName = new Date(year, month - 1).toLocaleString("default", { month: "long" });
        return `${monthName} ${year}`;
    }

    function deleteList(id, amount){
        setExpenses(prevExp => prevExp.filter(e => e.id !== id));
        setBalance(prevBal => prevBal - Number(amount));
    }

    function handleSave(expenseData){
        if(editingExpense){
            setExpenses(prevExp => 
                prevExp.map(e => e.id === editingExpense.id ? {...e, ...expenseData, amount: Number(expenseData.amount)} : e));
            
            setBalance(prevBal => prevBal - editingExpense.amount + Number(expenseData.amount));
            setEditingExpense(null);
        }else {
            addExpense(expenseData)
        }

        setIsModalOpen(false);
    }

    function getRecommendations(expenses, balance){
        if(!expenses.length){
            return ["Add some expenses to see personalized recommendations."];
        }

        const totalSpent = expenses
                            .filter(e => e.amount < 0)
                            .reduce((sum, e) => sum + Math.abs(e.amount), 0);
        const totalEarned = expenses
                            .filter(e => e.amount > 0)
                            .reduce((sum, e) => sum + Math.abs(e.amount), 0);

        const categoryTotals = {};
        expenses.forEach(e => {
            if(e.amount < 0){
                const cat = e.category || "Uncategorized";
                categoryTotals[cat] = (categoryTotals[cat] || 0) + Math.abs(e.amount);
            }
        });
        const topCategory = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0];

        const recommendations = [];
        if(topCategory && totalSpent > 0){
            const percent = ((topCategory[1] / totalSpent) * 100).toFixed(1);
            if(percent > 35){
                recommendations.push(`Your highest spending category is ${topCategory[0]} at ${percent}% of your total expenses — consider reducing it.`)
            }
        }

        if (balance > 0) {
            recommendations.push("You have a positive balance — consider moving some funds to savings.");
        } else if (balance < 0) {
            recommendations.push("Your balance is negative — review your expenses to get back on track.");
        }

        if (totalEarned > 0) {
            const spendPercent = ((totalSpent / totalEarned) * 100).toFixed(1);
            if (spendPercent > 90) {
                recommendations.push("You're spending more than 90% of your income — try cutting back.");
            } else if (spendPercent < 60) {
                recommendations.push("You're spending less than 60% of your income — great job managing your money!");
            }
        } 

        return recommendations
    }
    
    return(
        <div className="main-container">
            <Navigation 
                searchbar={searchbar}
                onSearchToggle={searchbarToggle}
                dateInput={dateInput}
                onDateToggle={dateInputToggle}
                selectedDate={selectedDate}
                onDateChange={handleDateChange}
                formatDate={formatDate}
            />
            <div className="three-section-area">
                <ExpensesSection 
                    expenses={expenses}
                    balance={balance}
                    onAddExpense={addExpense}
                    onEditExpense={setEditingExpense}
                    onDeleteExpense={deleteList}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    editingExpense={editingExpense}
                    setEditingExpense={setEditingExpense}
                    handleSave={handleSave}
                />
                <ChartSection 
                    expenses={expenses}
                    balance={balance}
                />
                <RecommendationsSection 
                    expenses={expenses}
                    balance={balance}
                    getRecommendations={getRecommendations}
                />
            </div>
        </div>
    );
}

export default MyComponent;