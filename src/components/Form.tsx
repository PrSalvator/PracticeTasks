import React from 'react'
import IForm from '../models/form'
import IField from '../models/field'
import Field from './Field'

export interface IFormProps{
    form: IForm
}

export default function Form({form}: IFormProps) {
  return (
    <form name={form.title}>
        <h2 className='text-center'>{form.title}</h2>
        <h4 className='text-center'>{form.description}</h4>
        {form.fields.map((field) =>
            <div className='my-2'>
                <Field field={field}></Field>
            </div>
        )}
        {
            form.buttons.map(button => {
                if(button === 'clear') return <button className='btn btn-outline-danger ms-2' type='reset'>{button}</button>
                return <button className='btn btn-outline-success' type='button'>{button}</button>
            })
        }
    </form>
  )
}
