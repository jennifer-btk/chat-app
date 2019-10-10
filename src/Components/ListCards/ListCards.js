import React from 'react';

import UserInformation from '../Card/Card';

const ArrayCard = (props) => {
  return (
    <div>
      {props.card.map((card) => {
        return (
          <UserInformation name={card.name} avatar={card.avatar} isOnline={card.isOnline}/>
        )
      })}
    </div>
  )
}

export default ArrayCard;