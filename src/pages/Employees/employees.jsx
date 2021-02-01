import React from 'react';
import Employee from '../../components/User';
import style from './style.module.css'

const Employees = ({employees, onClick}) => {

    const employeesJsx = employees.map(el => {
        return(
            <div className={style.employeeBlock} key={el.id}>
                <button type='button' key={el.id} onClick={() => {onClick(el.id)}}>delete</button>
                <Employee firstName={el.first_name} lastName={el.last_name}/>
            </div>
        )
    })
    return(
        <div>
            {employeesJsx}
        </div>
    )
}

export default Employees;
