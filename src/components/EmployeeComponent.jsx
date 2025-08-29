import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFristName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigator = useNavigate();

    function saveEmployee(e){
        e.preventDefault();

        const employee = {firstName, lastName, email}
        console.log(employee)

        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees');
        })
    }

  return (
    <div className='container'>
        <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Add Employee</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input
                                type='text'
                                placeholder='Emter employee first name'
                                name='firstname'
                                value={firstName}
                                className='form-control'
                                onChange={(e) => setFristName(e.target.value)}
                            ></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input
                                type='text'
                                placeholder='Emter employee last name'
                                name='lastname'
                                value={lastName}
                                className='form-control'
                                onChange={(e) => setLastName(e.target.value)}
                            ></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='text'
                                placeholder='Emter employee email'
                                name='email'
                                value={email}
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>

                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default EmployeeComponent