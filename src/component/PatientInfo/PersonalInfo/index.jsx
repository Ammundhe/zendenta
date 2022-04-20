import React from 'react';
import "./style.css";

const PersonalInfo = ({patient}) => {
  return (
    <div className='app__personlInfo'>
      <div className='app__personalInfo'>
        <p>Gender</p>
        <h5>{patient["Gender"]}</h5>
      </div>
      <div className='app__personalInfo'>
        <p>Birthday</p>
        <h5>{patient["Birthday"]}</h5>
      </div>
      <div className='app__personalInfo'>
        <p>Phone Number</p>
        <h5>{patient["Phone Number"]}</h5>
      </div>
      <div className='app__personalInfo'>
        <p>Street Address</p>
        <h5>{patient["Street Address"]}</h5>
      </div>
      <div className='app__personalInfo'>
        <p>City</p>
        <h5>New York</h5>
      </div>
      <div className='app__personalInfo'>
        <p>ZIP code</p>
        <h5>{patient["ZIP Code"]}</h5>
      </div>
      <div className='app__personalInfo'>
        <p>Member status</p>
        <h5>{patient["Member Status"]}</h5>
      </div>
      <div className='app__personalInfo'>
        <p>Registered Date</p>
        <h5>{patient["Register Date"]}</h5>
      </div>
    </div>
  )
}

export default PersonalInfo;
