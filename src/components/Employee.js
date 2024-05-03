import React, { useState } from 'react'
import EmpList from './EmpList';

const Employee = () => {
    const [value, setvalue] = useState("");
    const handleInput=(e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        
        setvalue(e.target.value)
    }
    const employee={
        id:101,
        firstName:"John",
        salary:100000,
        isIndian:true,
        phones:'0807920'
    }
    const firstName='John Doe';
    const salary =5000
  return (
    <div>
     {/* <p>Employee name is {employee.firstName}</p>
     <p>Employee salary is {employee.salary}</p>
     <p>Indian : {employee.isIndian ? 'Yes' : 'NO'}</p>
     {employee.phones &&

     <p>Employee Contaact is: {employee.phones}</p>  
    
      } */}
      <h2>Employee</h2>
      <input onChange={handleInput}/>
     <p>
      The input value is {value}</p>
      <EmpList/>
      
       </div>
  )
}

export default Employee