import React from 'react';
import PropTypes from 'prop-types';
import './Feed.css';

function Feed(props){
  return (
    <div className='sneeds__feed'>
      <div className='sneeds__feed-card' onClick = {() => props.whenFeedClicked(props.id)}>
        <div className='sneeds__feed-card_name'>
         <h2>{props.name}</h2>
        </div>
        <div className='sneeds__feed-card_details'>
          <p>Number of bags available: {props.quantity}</p>
          <p>Current bag weight: {props.bagPounds}</p>
          <p>Price per lb: {props.price}</p>
        </div>
      </div>
    </div>
  )
}

Feed.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  totalPounds: PropTypes.number.isRequired,
  bagPounds: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  poundsSold: PropTypes.number,
  id: PropTypes.string,
  whenFeedClicked: PropTypes.func
  
}

export default Feed;