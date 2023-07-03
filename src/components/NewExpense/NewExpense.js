import './NewExpense.css'
import ExpenseForm from './form/ExpenseForm'
import { v4 as uuidv4 } from 'uuid'

const NewExpense = (props) => {
  const saveDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: uuidv4(),
    }
    props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveData={saveDataHandler} />
    </div>
  )
}
export default NewExpense
