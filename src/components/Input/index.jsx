import React from 'react';
import { ErrorMessage, useField } from 'formik';
import style from './style.module.css'

const Input = ({placeholder, label, ...props}) => {
    const [field, meta] = useField(props);
    return (
      <div className={style.wrapper}>
        {label && (
          <label htmlFor={label} className={style.label}>
            {label}
          </label>
        )}
        <input className={style.input} placeholder={placeholder} {...field} />
        {meta.touched && meta.error ? (
          <ErrorMessage className="error">{meta.error}</ErrorMessage>
        ) : null}
      </div>
    );
  };

export default Input;