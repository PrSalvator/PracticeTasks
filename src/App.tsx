import { useState } from 'react'
import './App.css'

import form1 from './assets/form-test-1.json'
import form2 from './assets/form-test-2.json'
import form3 from './assets/form-test-3.json'
import Form from './components/Form'
import IForm from './models/form'

function App() {
  const [form, setForm] = useState(form1)
  const forms = [form1, form2, form3]

  function btnClick(formNumber: number){
    setForm(forms[formNumber])
  }

  return(
    <main className='mx-auto w-50 p-3'>
      <div className='d-flex justify-content-center mb-3'>
        <button className='btn btn-outline-primary' onClick={() => btnClick(0)}>Form 1</button>
        <button className='btn btn-outline-primary mx-2' onClick={() => btnClick(1)}>Form 2</button>
        <button className='btn btn-outline-primary' onClick={() => btnClick(2)}>Form 3</button>
      </div>
      <Form form={form as IForm}></Form>
    </main>
  )
}

export default App
