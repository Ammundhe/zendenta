import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import "./style.css";

const Notes = () => {
  return (
    <div className='app__notesbar'>
      <nav className='app__notebar-navbar'>
        <h4>Notes</h4>
        <p>See all</p>
      </nav>
      <div className='app__notebar-notes'>
        <p>-Lorem ipsum dolor sit.</p>
        <p>-Lorem ipsum dolor sit.</p>
        <p>-Lorem ipsum dolor sit.</p>
        <button type='button'>Save Notes</button>
      </div>
      <div className='app__notebar-doc'>
          <p>Lorem ipsum, dolor sit ame.</p>
          <div className='app__notebar-docinfo'>
              <span>
                <PersonIcon/>
                <h4>Drg.Meghna Honade</h4>
              </span>
              <span>
                  <h4>25 Nov 19</h4>
              </span>
          </div>
      </div>
    </div>
  )
}

export default Notes
