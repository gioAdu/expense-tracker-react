import { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const data_arr = [
    {
      id: 0,
      title: 'car Insurance',
      amount: 295.33,
      date: new Date('2020-03-25'),
    },
    { id: 1, title: 'milk ', amount: 2.2, date: new Date('2021-09-27') },
    { id: 2, title: 'apple ', amount: 6, date: new Date('2022-04-25') },
  ]

  const [expensesArr, setExpensesArr] = useState(data_arr)

  const addExpenseHandler = (expense) => {
    setExpensesArr((prevState) => [expense, ...prevState])
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesArr} />
    </div>
  )
}

export default App
