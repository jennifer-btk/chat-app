import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="CtnChatbox">
      <div className='CtnAvatar'>
        <img
            className="Avatar"
            src={props.avatar}
            alt={props.name}
          />
      </div>
      <div className="CtnUser">
        <h3>{props.name}</h3>
        <p className={props.isOnline ? "Isoffline" : "Isonline"}>
          <div className="GetStatus"></div>
          {props.isOnline ? 'Offline' : 'Online'}
        </p>
      </div>
    </div>
  )
}

export default Card;