import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "firstname": "Elle",
            "lastname": "L.",
            "email": "e.l@gmail.com"
        },
        {
            "id": 2,
            "firstname": "Bern",
            "lastname": "B.",
            "email": "b.b@gmail.com"
        }
    ]
    return (
        <div>
            
            <h2>List of Employees</h2>

            <table>
                <thread>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                    </tr>
                </thread>
                <tbody>
                    {
                        dummyData.map(employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent