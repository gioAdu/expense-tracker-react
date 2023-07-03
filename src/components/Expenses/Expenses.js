import './Expenses.css'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import Card from '../Card/Card'
import ExpensesFilter from './ExpenseFilter/ExpenseFilter'
import { useState } from 'react'
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((item) => (
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
