import React from 'react'
import IField from '../models/field'

interface IFieldProps{
    field: IField
}

export default function Field({field}: IFieldProps) {
    if(field.attrs.type === 'select'){
        return (
            <label htmlFor={field.attrs.name}>{field.label}
                <select className='form-select' name={field.attrs.name}>
                    {
                        field.attrs.variants!.map((variant) =>
                            <option key={variant.value} value={variant.value}>{variant.label}</option>
                        )
                    }
                </select>
            </label>
        )
    }
    if(field.attrs.variants){
        return (
            <label htmlFor={field.attrs.name}>{field.label}
                {field.attrs.variants!.map((variant) => 
                    <div className='form-check'>
                        <label className='form-check-label' htmlFor={field.attrs.name}>{variant.label}</label>
                        <input className='form-check-input' type={field.attrs.type} name={field.attrs.name} value={variant.value}/>
                    </div>
                )}
            </label>
        )
    }
    if(field.attrs.type === 'textarea'){
        return (
            <label htmlFor={field.attrs.name}>
                {field.label}
                <textarea className='form-control' name={field.attrs.name}></textarea>
            </label>
        )
    }
    return (
        <label htmlFor={field.attrs.name}>
            {field.label}
            <input className='form-control' type={field.attrs.type} name={field.attrs.name}/>
        </label>
    )
}
