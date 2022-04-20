import React, {useState, useEffect} from 'react';
import { Appointment, SideBar, NavBar, PatientInfo, Header, Notes, Files } from './component';
import axios from 'axios';
import "./App.css";

const App = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  const [patient, setPatient]=useState({})
  const [upcoming, setUpcoming]=useState([])
  const [past, setPast]=useState([])
  const [files, setfiles]=useState([])
  const [doc, setDoc]=useState([])

  const fetchPatient=async()=>{
    const response= await axios.get("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
    setPatient(response.data[0])
  }
  const fetchAppointment=async()=>{
    const response= await axios.get("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
    setUpcoming([response.data[0]["Upcoming Appointments"]]);
    setPast([response.data[0]["Post Appointment"]]);
  }
  const fetchFiles=async()=>{
    const response= await axios.get("https://619f39821ac52a0017ba467e.mockapi.io/Files")
    setfiles(response.data[0]["files"]);
  }
  const fetchdoc=async()=>{
    const response= await axios.get("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
    setDoc([response.data[0]]);
  }

  useEffect(()=>{
    fetchPatient()
    fetchAppointment()
    fetchFiles()
    fetchdoc()
  },[])
  return (
    <div className='myapp'>
        <SideBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} doc={doc}/>
        <div className='myapp__info'>
          <NavBar toggleMenu={toggleMenu}  setToggleMenu={setToggleMenu}/>
          <Header/>
          <div className='myapp__info-patient'>
            <div>
              <PatientInfo patient={patient}/>
              <Appointment upcoming={upcoming} past={past}/>
            </div>
            <div>
              <Notes/>
              <Files files={files}/>
            </div>
          </div>

        </div>
    </div>
  )
}

export default App;
