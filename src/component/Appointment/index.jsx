import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import "./style.css";

const Appointment = ({upcoming, past}) => {

  return (
    <div className='app__appointment'>
      <nav className='app__appointment-navbar'>
        <h3>Upcoming Appointment</h3>
        <h3>Past Appointment</h3>
        <h3>Medical Record</h3>
      </nav>
      <div className='app__appointment-medical_data'>
        <div className='app__appointment-medial_info'>
            <h3>Root canel Treatment</h3>
            <div className='app__appointment-show'>
                <ExpandLessIcon/>
                <h3>Show previous Treament</h3>
            </div>
        </div>
        {upcoming.map((item, index)=>{
          
          return(
              <div className='app__appointment-scrollbar' key={index+1}>
                <div className='app__appointment-event'>
                  <div className='app__appointment-date'>
                    <div className='app__apointment-dateinfo'>
                      <h4>{item["Date"]}</h4>
                      <p>{item["Time"]}</p>
                    </div>
                    <div className='app__appointment-line'/>
                    <div className='app__appointment-medical'>
                        <p>Treatment</p>
                        <h4>{item["Treatment"]}</h4>
                    </div>
                    <div className='app__appointment-line'/>
                    <div className='app__appointment-medical'>
                        <p>Dentise</p>
                        <h4>{item["Dentist"]}</h4>
                    </div>
                    <div className='app__appointment-medical'>
                        <p>Nurse</p>
                        <h4>Jessicamila</h4>
                    </div>
                    <div className='app__appointment-note'>
                        <StickyNote2Icon sx={{color:"#00BFFF"}}/>
                        <h5>Note</h5>
                    </div>
                  </div>
                </div>
                <div className='app__appointment-event'>
                  <div className='app__appointment-date'>
                    <div className='app__apointment-dateinfo'>
                      <h4>26 Nov '19</h4>
                      <p>09.00-10.00</p>
                    </div>
                    <div className='app__appointment-line'/>
                    <div className='app__appointment-medical'>
                        <p>Treatment</p>
                        <h4>Open Access</h4>
                    </div>
                    <div className='app__appointment-line'/>
                    <div className='app__appointment-medical'>
                        <p>Dentise</p>
                        <h4>Drg. Adman H.</h4>
                    </div>
                    <div className='app__appointment-medical'>
                        <p>Nurse</p>
                        <h4>Jessicamila</h4>
                    </div>
                    <div className='app__appointment-note'>
                        <StickyNote2Icon sx={{color:"#00BFFF"}}/>
                        <h5>Note</h5>
                    </div>
                  </div>
                </div>
                <div className='app__appointment-event'>
                  <div className='app__appointment-date'>
                    <div className='app__apointment-dateinfo'>
                      <h4>26 Nov '19</h4>
                      <p>09.00-10.00</p>
                    </div>
                    <div className='app__appointment-line'/>
                    <div className='app__appointment-medical'>
                        <p>Treatment</p>
                        <h4>Open Access</h4>
                    </div>
                    <div className='app__appointment-line'/>
                    <div className='app__appointment-medical'>
                        <p>Dentise</p>
                        <h4>Drg. Adman H.</h4>
                    </div>
                    <div className='app__appointment-medical'>
                        <p>Nurse</p>
                        <h4>Jessicamila</h4>
                    </div>
                    <div className='app__appointment-note'>
                        <StickyNote2Icon sx={{color:"#00BFFF"}}/>
                        <h5>Note</h5>
                    </div>
                  </div>
                </div>
              </div>

          )
        })}
      </div>
    </div>
  )
}

export default Appointment;
