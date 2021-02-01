import React, { useEffect, useState } from 'react'
import * as axios from 'axios';
import Employees from './employees';
import style from './style.module.css'
import PopUp from '../../components/PopUp'
import FormAdd from '../../components/FormAdd'

const EmployeesContainer = () => {
    const [employee, setEmployee] = useState([])
    const [isOpenPopUp, setIsOpenPopUp] = useState(false)
    useEffect(() => {
        axios.get('https://reqres.in/api/users?per_page=12').then(response => setEmployee(response.data.data))
    }, [])
    const addEmployee = (employeeData) => {
        setEmployee([...employee, employeeData])
    }
    const removeEmployee = (id) => {
        const newArrEmployees = employee.filter(el => el.id !== Number(id))
        setEmployee(newArrEmployees)
    }
    return(
        <div className={style.employeesBlock}>
            <button type='button' onClick={()=>setIsOpenPopUp(true)}>Add Employee</button>
            <Employees employees={employee} onClick={removeEmployee}/>
            {isOpenPopUp && (
                <PopUp onClick={() => setIsOpenPopUp(false)}>
                    <FormAdd onSubmit={(data) => {setIsOpenPopUp(false); addEmployee(data)}} />
                </PopUp>
            )}
        </div>
    )
}
export default EmployeesContainer;
