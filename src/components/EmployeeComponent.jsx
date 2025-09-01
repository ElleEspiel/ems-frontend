import React, { useState } from 'react'
import { createEmployee, getEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFristName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email:''
    })

    const navigator = useNavigate();
    useEffect(() => {
        if(id){
            getEmployee(id).then((response) => {
                setFristName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            })
        }
    }, [id])

    function saveEmployee(e){
        e.preventDefault();

        if(validateForm()){
            const employee = {firstName, lastName, email}
            console.log(employee)

            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employees');
        })
        }

    }

    function validateForm(){
        let valid = true;

        const error = {... errors}

        if(firstName.trim()){
            error.firstName = '';
        }else{
            error.firstName = 'First name is required!';
            valid = false;
        }
        if(lastName.trim()){
            error.lastName = '';
        }else{
            error.lastName = 'Last name is required!';
            valid = false;
        }
        if(email.trim()){
            error.email = '';
        }else{
            error.email = 'Email is required!';
            valid = false;
        }

        setErrors(error);

        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (
    <div className='container'>
        <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input
                                type='text'
                                placeholder='Emter employee first name'
                                name='firstname'
                                value={firstName}
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                onChange={(e) => setFristName(e.target.value)}
                            ></input>
                            {errors.firstName && <div className='invalid-feedback'> {errors.firstName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input
                                type='text'
                                placeholder='Emter employee last name'
                                name='lastname'
                                value={lastName}
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                onChange={(e) => setLastName(e.target.value)}
                            ></input>
                            {errors.lastName && <div className='invalid-feedback'> {errors.lastName}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='text'
                                placeholder='Emter employee email'
                                name='email'
                                value={email}
                                 className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                            {errors.email && <div className='invalid-feedback'> {errors.email}</div>}
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