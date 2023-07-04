import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './form/ExpenseForm'
import { v4 as uuidv4 } from 'uuid'

const NewExpense = (props) => {
  const [expenseButton, setExpenseButton] = useState(true)

  const saveDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: uuidv4(),
    }
    props.onAddExpense(expenseData)
    setExpenseButton(true)
  }

  const clickHandler = () => {
    setExpenseButton(false)
  }

  return (
    <div className='new-expense'>
      {expenseButton ? (
        <button onClick={clickHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveData={saveDataHandler}
          setExpenseButton={setExpenseButton}
        />
      )}
    </div>
  )
}
export default NewExpense
