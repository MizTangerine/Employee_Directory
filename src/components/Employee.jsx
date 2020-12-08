import React from 'react';
import useSortableData from './Sort'


const Employee = (props) => {
    const { employees, requestSort, sortConfig } = useSortableData(props.employees);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('first_name')}
                            className={getClassNamesFor('first_name')}
                        >First Name</button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('last_name')}
                            className={getClassNamesFor('last_name')}
                        >Last Name</button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('title')}
                            className={getClassNamesFor('title')}
                        >Title</button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('email')}
                            className={getClassNamesFor('email')}
                        >Email</button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('phone')}
                            className={getClassNamesFor('phone')}
                        >Phone Number</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {employees.map((emp) => (
                    <tr key={emp.id}>
                        <td>{emp.first_name}</td>
                        <td>{emp.last_name}</td>
                        <td>{emp.title}</td>
                        <td>{emp.email}</td>
                        <td>{emp.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Employee