import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import "./style.css";



const NavBar = ({toggleMenu, setToggleMenu}) => {
  return (
    <div className='app__navbar'>
      {!toggleMenu && <LegendToggleIcon style={{cursor: "pointer"}} onClick={()=>setToggleMenu(true)}/>}
      <div className='app__navbar-profile'>
        <PersonIcon/>
        <h3>Diane Cooper</h3>
      </div>
      <div className='app__navbar-searchbar'>
        <div className='app__search'>
          <SearchIcon style={{color:"grey"}}/>
          <input type="text" placeholder='search!...' />
        </div>
        <AddBoxRoundedIcon style={{paddingLeft:"20px"}}/>
        <CircleNotificationsRoundedIcon/>
      </div>
    </div>
  )
}

export default NavBar;
