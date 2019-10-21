import React from 'react';
import { connect } from 'react-redux';

const Navbar = ({employee}) => {
  const displayCompanyInfo = (data) => {
    const companyInfo = data[0].companyInfo;
    return<div className='company-details'>
       <span className='company-title'> {companyInfo.companyName}</span>
       <span className='company-moto'> {companyInfo.companyMotto}</span>
       <span className='company-est'>Est: {new Date(companyInfo.companyEst).toUTCString()}</span>
      </div>

  }
    return(
        <nav className="navbar bg-dark">
      {employee.length > 0 && displayCompanyInfo(employee)} 
    </nav>
    )
}

const mapStateToProps = state => ({
  employee: state.employee
})

export default connect(mapStateToProps)(Navbar);
