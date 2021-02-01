import React from 'react';
import { Form, Formik } from 'formik';
import style from './style.module.css';
import Input from '../Input'

const FormAdd = ({onSubmit}) => {
  return(
    <Formik
    initialValues={{
      first_name: '',
      last_name: ''
    }}
    onSubmit={(data) => {
      try {
        data.id = (`${Math.floor(Math.random()*1000)}_${data.last_name}`)
        onSubmit(data)
      } catch (error) {
        console.log(error)
      } finally {
        console.log('submit')
      }
    }}
    >{() => (
      <div>
           <Form className={style.form}>
             <Input label="First name" name="first_name" placeholder="FIRST NAME"/>
             <Input label="Last name" name="last_name" placeholder="LAST NAME"/>
             <button type='submit'>Submit</button>
           </Form>
      </div>
     )}
     </Formik>
  );

}

export default FormAdd;