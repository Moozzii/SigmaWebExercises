// Cards.js
import React from 'react';
import './cards.css';

function Cards(props) {
  return (
    <div className='card'> {/* Each card */}
      <p>User ID: {props.userid}</p>
      <p>That: {props.that}</p>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Cards;
