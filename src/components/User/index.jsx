import React from 'react';

const Employee = ({firstName, lastName}) => {
    return(
        <p>{`${firstName} ${lastName}`}</p>
    )
}
export default Employee;