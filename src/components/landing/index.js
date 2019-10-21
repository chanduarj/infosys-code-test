import React from 'react';
import { connect } from 'react-redux';
const Landing = ({employee}) => {

  const displayEmployeeList = (data) => {
      const employeeData = data[0].employees
      return employeeData.map(emp => (
        <ul key={emp.id} className="flex-container">
          <li className="emp-list">
            <h2 className="emp-label">{emp.firstName}</h2>
            <div className="avatar">
            <span><img className="avatar-img" alt="employee" src={emp.avatar} /></span>
            </div>
            <div className="emp-details"> 
            <span className="card-element">{emp.firstName} {emp.lastName}</span>
            <span className="card-element">{emp.jobTitle}</span>
            <span className="card-element">{emp.age}</span>
            <span className="card-element">{emp.bio}</span>
            </div>
          </li>
        </ul>
    ));
  }
    return(
      <div className="container">
        <div className="employee-list">
        {employee.length > 0 && displayEmployeeList(employee)}   
        </div>
      </div>
    )
}
 const mapStateToProps = state => ({
   employee: state.employee
 })

export default connect(mapStateToProps)(Landing);