import React from "react";

function Employee(props) {
    // console.log(props)
    return (
        <div>
            <h2>First Name: {props.fName}</h2>
            <h2>Last Name: {props.lName}</h2>
            <h2>Title: {props.title}</h2>
            <h2>Email: {props.email}</h2>
            <img src={props.avatar} alt={props.fName}></img>
        </div>
    )
};

export default Employee;