import React from 'react';
import PropTypes from 'prop-types';

function Feed(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenFeedClicked(props.id)}>
        <h2>{props.name}</h2>
        <h3>Number of bags available: {props.quantity}</h3>
        <h4>Current bag weight: {props.bagPounds}</h4>
        <h4>Price per lb: {props.price}</h4>
      </div>
    </React.Fragment>
  )
}

Feed.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  totalPounds: PropTypes.number.isRequired,
  bagPounds: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenFeedClicked: PropTypes.func
  
}

export default Feed;