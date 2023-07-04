import './Expenses.css'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import Card from '../Card/Card'
import ExpensesFilter from './ExpenseFilter/ExpenseFilter'
import { useState } from 'react'
import ExpensesChart from './ExpensesChart'
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('All')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter((item) => {
    if (filteredYear === 'All') {
      return item
    } else {
      return item.date.getFullYear().toString() === filteredYear
    }
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {!filteredExpenses.length && (
        <h2 className='expenses-list__fallback'>No expenses found.</h2>
      )}
      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </Card>
  )
}

export default Expenses
