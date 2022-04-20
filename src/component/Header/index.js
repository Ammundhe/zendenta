import React from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import edit from "../../Assets/edit.png";
import "./style.css";

const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__header-patient'>
          <h3>Patient List</h3>
          <ChevronRightRoundedIcon style={{paddingRight:"10px"}}/>
          <h3 style={{color:"GrayText"}}>Diane Cooper</h3>
      </div>
      <div className='app__header-printEdit'>
        <LocalPrintshopRoundedIcon style={{background:"white", marginRight:"30px", padding:"10px"}} />
        <div className='app__header-edit'>
            <img src={edit} alt="edit_img" />
            <h6>Edit Patient</h6>
        </div>
      </div>
    </div>
  )
}

export default Header;
