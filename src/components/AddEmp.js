// import React, { useState } from "react";
// import axios from "axios";

// const AddEmp = () => {
//   const [empId, setEmpId] = useState("");
//   const [empName, setEmpName] = useState("");
//   const [empSalary, setEmpSalary] = useState("");


//   const handleSubmit = (e) => {
//     e.preventDefault();
//       const obj = {
//         employeeID:empId,
//         employeeName:empName,
//         employeeSalary:empSalary,
//     };
//     console.log(obj);

//     axios
//       .post("http://localhost:8000/api/employees", obj)
//       .then((res) => {
//         console.log("daata added");
//         console.log(res);
//       })
//       .catch((error) => {
//         console.log(error + "my err");
//       });
//       alert("employee added");
//       setEmpId('');
//       setEmpName('');
//       setEmpSalary('');
//   };

//   return (
//     <>
//       <h1>AddEmp Component</h1>
//       <p>Allow user to add new employee to the backend.</p>
//       <form>
//         <input
//           type="text"
//           placeholder="empID"
//           onChange={(e) => {
//             setEmpId(e.target.value);
//           }}
//         />
        
//         <p>Error: </p>
        
//         <input
//           type="text"
//           placeholder="empName"
//           onChange={(e) => {
//             setEmpName(e.target.value);
//           }}
//         />
        
        
//         <p>Error:</p>

//         <input
//           type="Number"
//           placeholder="salary"
//           onChange={(e) => setEmpSalary(e.target.value)}
//         />
        
//         <p>Error: </p>
//         <input type="submit" onClick={handleSubmit} />
//       </form>
//     </>
//   );
// };

// export default AddEmp;




// import axios from "axios";
// import { useState } from "react";

// const AddEmployee = () => {

//     const backendUrl = 'https://jsonplaceholder.typicode.com/users';
//     const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });

//     const handleChange = (evt) => {
//         console.log(evt.target);
//         setEmpData({ ...empData, [evt.target.name]: evt.target.value });
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         console.log(empData);
//         axios.post(backendUrl, empData)
//             .then((resp) => {
//                 console.log(resp.data);
//                 alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
//                 setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
//             });
//     };

//     return (
//         <>
//             <h1>Add Employee Component</h1>
//             <form onSubmit={handleSubmit} >
//                 <label htmlFor="firstName">First Name:</label>
//                 <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
//                 <br />
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
//                 <br />
//                 <label htmlFor="aadhaar">Aadhaar:</label>
//                 <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
//                 <br />
//                 <label htmlFor="salary">Salary:</label>
//                 <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
//                 <br />
//                 <input type="submit" value="Add Employee" />
//             </form>
//         </>
//     );
// };

// export default AddEmployee;






import axios from "axios";
import { useState } from "react";

const AddEmployee = () => {
    const backendUrl = 'https://jsonplaceholder.typicode.com/users';
    const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
        // Clear validation errors when user starts typing
        setErrors({ ...errors, [evt.target.name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!empData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        if (!/^\d{12}$/.test(empData.aadhaar)) {
            newErrors.aadhaar = "Aadhaar must be a 12-digit number";
            isValid = false;
        }

        if (empData.salary <= 0 || isNaN(empData.salary)) {
            newErrors.salary = "Salary must be a positive number";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            axios.post(backendUrl, empData)
                .then((resp) => {
                    alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
                    setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
                })
                .catch(error => {
                    console.error("Error adding employee:", error);
                });
        }
    };

    return (
        <>
            <h1>Add Employee Component</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
                {errors.email && <span className="error">{errors.email}</span>}
                <br />
                <label htmlFor="aadhaar">Aadhaar:</label>
                <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
                {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
                <br />
                <label htmlFor="salary">Salary:</label>
                <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
                {errors.salary && <span className="error">{errors.salary}</span>}
                <br />
                <input type="submit" value="Add Employee" />
            </form>
        </>
    );
};

export default AddEmployee;