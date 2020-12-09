import React from 'react';

// import './App.css';
import Header from './components/Header.jsx'
import employees from './employees.json'
import Employee from './components/Employee.jsx';
// import Filter from './components/Filter.jsx'

export default function App() {

  return (
    <div>
      <Header />
      {/* <Filter /> */}
      <Employee employees={employees} />
    </div >
  );
}
