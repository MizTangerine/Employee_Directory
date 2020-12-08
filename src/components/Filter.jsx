import React, { useState } from "react";
// import "./styles.css";
import employees from '../employees.json'


const List = ({ employees }) => {
    const [value, setValue] = useState("");
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            {employees
                .filter(item => {
                    if (!value) return true;
                    if (item.title.toLowerCase().includes(value.toLowerCase())
                        || item.first_name.toLowerCase().includes(value.toLowerCase())
                        || item.last_name.toLowerCase().includes(value.toLowerCase())
                        || item.email.toLowerCase().includes(value.toLowerCase())
                        || item.phone.toLowerCase().includes(value.toLowerCase())
                    ) {
                        return true;
                    }
                    return false;
                })
                .map(item => (
                    <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.title}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
        </div>
    );
};

function Filter() {
    return (
        <div className="Filter">
            <List employees={employees} />
        </div>
    );
}

export default Filter;
