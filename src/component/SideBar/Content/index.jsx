import React from 'react';
import "./style.css"

const Content = ({Icon, text, active}) => {
  return (
    <div className={`app__content ${active && "activeSidebar"}`}>
      <Icon style={{color:"grey", fontSize:"30px"}}/>
      <h3>{text}</h3>
    </div>
  )
}

export default Content;
