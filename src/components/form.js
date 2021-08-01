//Imports:
import React, {useState} from 'react'
import { Field, Form } from 'react-final-form'
import  {useDispatch}  from 'react-redux'
import {saveForm} from '../features/formSlice.js'
import  render  from 'react-dom'

//Const that would work to deal with submissions:
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}
//Form module that will be used by App.js:
let ContactForm = props => {
    //Consts and function to update state of the form:
    const [form , setForm ] = useState('')
    const dispatch = useDispatch()  
    const addForm = () => {
      dispatch(saveForm({
          Form: form,
       } ) )
  }
  //Returns the form to contact, onchanges to the form will update the state's value to properly reflect the form:
  return (
    <Form onSubmit={onSubmit}
         render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} onChange={addForm} >
      <div class="formElement">
        <label htmlFor="usersName"></label>
        <Field name="usersName" {...setForm(JSON.stringify(values, "usersName"))}>
         {({ input, meta }) => (
              <div>
                <label>Name: </label>
                <input {...input} class="form-control" type="text"  placeholder="Name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
            </Field>
      </div>
      <div class="formElement">
        <label htmlFor="Email"></label>
        <Field name="Email" {...setForm(JSON.stringify(values, 1-1))}>
         {({ input, meta }) => (
              <div>
                <label>Email:</label>
                <input class="form-control" {...input} type="text" placeholder="Email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
            </Field>
      </div>
      <div class="formElement">
        <label htmlFor="Message"></label>
        <Field name="Message" {...setForm(JSON.stringify(values, 2-2))} >
         {({ input, meta }) => (
              <div class="form-group">
                <label>Message:</label>
                <input {...input} class="form-control textarea" type="text" placeholder="....." />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
            </Field>
      </div>
      <button class="formSubmit" type="submit">Submit</button>
      </form>
         )}
    />
  )
}
export default ContactForm;