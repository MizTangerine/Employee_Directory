import React, { useState } from 'react';
// import MaterialTable from 'material-table';
import employees from '../employees.json'

export const Table = () => {
    let [data, setData] = useState(employees)
    console.log('data: ', data)
    // const data = employees

    // const columns = [
    //     // {
    //     //     title: "Avatar",
    //     //     field: "avatar",
    //     // },
    //     {
    //         title: "First Name",
    //         field: "first_name",
    //     },
    //     {
    //         title: "Last Name",
    //         field: "last_name",
    //     },
    //     {
    //         title: "Email",
    //         field: "email",
    //     },
    //     {
    //         title: "Phone Number",
    //         field: "phone",
    //     },
    // ]

    const sort = () => {
        console.log('sort')
        const newState = [...data].sort((emp1, emp2) => {
            let fa = emp1.first_name.toLowerCase();
            let fb = emp2.first_name.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })


        setData(newState)
    }

    // return <MaterialTable title="Employee Details" data={data} columns={columns} />
    return (
        <div>
            <table>
                <tr>
                    <th onClick={() => sort()}>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
                {data.map(emp =>
                    <tr key={emp.id}>
                        <td>{emp.first_name}</td>
                        <td>{emp.last_name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.phone}</td>
                    </tr>)}
            </table>
        </div>
    )
}