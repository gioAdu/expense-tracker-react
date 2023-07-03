import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [title, setTilte] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const titleChangeHandler = (event) => {
    setTilte(event.target.value)
  }
  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    }
    props.onSaveData(expenseData)
    setTilte('')
    setAmount('')
    setDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>title</label>
          <input type='text' onChange={titleChangeHandler} value={title} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min={0.01}
            step={0.01}
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min={'2019-01 -01'}
            max={'2022-12-31'}
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}
export default ExpenseForm
