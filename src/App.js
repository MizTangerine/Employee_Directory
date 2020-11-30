import React, { Component } from 'react';

import './App.css';
import Employee from './components/Employee.jsx'



import Mockaroo from 'mockaroo'
var client = new Mockaroo.Client({
  apiKey: 'c01a9820'
})

class App extends Component {
  state = {
    data: []
  }
  click = () => {
    client.generate({
      count: 10,
      schema: 'Employees'
    }).then(res => {
      console.log(res)
      const mockData = res.map(data => ({
        id: data.id,
        fName: data.first_name,
        lName: data.last_name,
        title: data.title,
        email: data.email
      }))
      this.setState({ data: mockData })
    });
  }

  render() {
    return (
      <div>
        <p>Hi from App</p>
        { this.state.data.map(employee => < Employee key={employee.id}
          fName={employee.fName}
          lName={employee.lName}
          title={employee.title}
          email={employee.email}
        />)}
        <button onClick={this.click}>click</button>
      </div >
    );
  }
}

export default App;