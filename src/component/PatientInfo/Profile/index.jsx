import React from 'react';
import { Avatar } from '@mui/material';
import picture from "../../../Assets/patient.jpg";
import "./style.css";

const Profile = ({patient}) => {
  console.log(patient);
  return (
    <div className='app__profile'>
      <Avatar src={picture} atl="profile_img" sx={{ height: '60px', width: '60px', margin:"10px 0" }}/>
      <h3>{patient["name"]}</h3>
      <p>{patient["e-email"]}</p>
      <div className='app__profile-events'>
            <div className='app__profile-event_past'>
                <h3>{patient["Past"]}</h3>
                <p>past</p>
            </div>
            <div  className='app__profile-event_liner'/>
            <div className='app__profile-event_upcoming'>
                <h3>{patient["Upcoming"]}</h3>
                <p>Upcoming</p>
            </div>
      </div>
      <button type='submit' className='custom__button'>Send Message</button>
    </div>
  )
}

export default Profile
