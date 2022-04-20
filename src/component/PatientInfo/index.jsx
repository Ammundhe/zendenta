import React from 'react';
import Profile from './Profile';
import PersonalInfo from './PersonalInfo';
import "./style.css"

const PatientInfo = ({patient}) => {
  return (
    <div className='app__patientInfo'>
      <Profile patient={patient}/>
      <PersonalInfo patient={patient}/>
    </div>
  )
}

export default PatientInfo;
