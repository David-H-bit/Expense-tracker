# Expense Tracker

A React-based expense tracking application with data visualization and spending recommendations.

## Features

✅ **Implemented:**
- Add/edit/delete expenses
- Real-time balance calculation
- Doughnut chart visualization (spent vs earned)
- Smart spending recommendations
- Responsive component architecture
- Search functionality
- Date filtering

🚧 **Not Yet Implemented:**
- Local Storage

## Components

```
MyComponent.jsx          # Main component with state management
├── Navigation.jsx       # Nav bar (search/date/filter - UI only)
├── ExpensesSection.jsx  # Left section
│   ├── ExpenseItem.jsx  # Individual expense items
│   └── Modal.jsx        # Add/edit expense modal
├── ChartSection.jsx     # Middle section with chart
│   └── MoneyChart.jsx   # Doughnut chart
└── RecommendationsSection.jsx  # Right section
```

## Dependencies

- React
- Chart.js
- react-chartjs-2

## Usage

```bash
npm install
npm start
```

## Current Status

Basic functionality is complete. I will add local storage later.
