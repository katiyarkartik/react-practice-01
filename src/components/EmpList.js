import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
import "./EmpList.css";
const EmpList = () => {
    
const [empList, setEmpList]=useState('');

useEffect(() => {
    console.log('useEffect');
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp) => {
            console.log(resp.data);
            setEmpList(resp.data);
        })
}, []);
return (
 <div>
    <p> {empList.length}</p>
    <h2> Employee List</h2>

            <> {empList && empList.map(emp =>
                <div className='emp-list'  key={emp.id}>
                    <p>{emp.id}</p>
                    <p>{emp.name}</p>
                    <p>{emp.username}</p>
                    <p>{emp.email}</p>
                    <p>{emp.phone}</p>
                    <p>{emp.website}</p>
                </div>
            )} </>
 </div>
  )
  
}

export default EmpList