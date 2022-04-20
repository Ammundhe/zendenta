import React, {useState} from 'react';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import logo from "../../Assets/logo.png";
import doctor from "../../Assets/doc.jpg";
import Content from './Content';
import "./style.css";



const SideBar = ({toggleMenu,setToggleMenu, doc}) => {
  const [toggle, setToggle]=useState(false)
  return (
    toggleMenu &&
      <div className='app__sidebar'>
          <div className='app__sidebar-mainHeading'>
              <img src={logo} alt="logo_img"/>
              <div className='app__sidebar-subheading'>
                  <h2>Zendenta</h2>
                  <p>Lorem ipsum.</p>
              </div>
              <LegendToggleIcon style={{cursor: "pointer"}} onClick={()=>setToggleMenu(false)}/>
          </div>
          <div className='app__sidebar-content'>
              <Content Icon={EmojiObjectsIcon} text="Overview"/>
              <Content Icon={CalendarTodayIcon} text="Calendar"/>
              <Content Icon={PersonIcon} text="Patient List" active/>
              <Content Icon={MessageIcon} text="Message"/>
              <Content Icon={PaymentIcon} text="Payment Information"/>
              <Content Icon={SettingsIcon} text="Setting"/>
          </div>
          <div className='app__sidebar-help'>
            <Content Icon={InfoIcon} text="Help"/> 
          </div>
          <div className='app__sidebar-doctorInfo'>
            {toggle ?
               <>
               {doc.map((item, index)=>(
                < >
                <Avatar src={doctor} alt="doc_image"/>
                <div className='app__sidebar-doctorInfo_name' key={index+1}>
                  <h4>{item.name}</h4>
                  <p>{item.specification}</p>
                </div>
                <ExpandLessIcon style={{color:"grey", fontSize:"30px", cursor: "pointer"}} onClick={()=>setToggle(false)}/>
                </>
               ))}
               </>
            :<ExpandMoreIcon style={{color:"grey", fontSize:"30px",    cursor: "pointer"}} onClick={()=>setToggle(true)}/>
  
            }
          </div>
      </div>
    
  )
}

export default SideBar;
