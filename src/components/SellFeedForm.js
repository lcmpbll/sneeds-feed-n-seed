import React from 'react';
import PropTypes from 'prop-types';

function sellFeedForm(props) {
  const {feed} = props;
  function handleSellFeedFormSubmission(event) {
    event.preventDefault();
    props.onSellFeed({
      name: feed.name,
      poundsSold: parseInt(event.target.poundsSold.value), 
      price: feed.price,
      id: feed.id,
      totalPounds: feed.totalPounds - parseInt(event.target.poundsSold.value),
      bagPounds: feed.totalPounds % 130,
      quantity: Math.floor(feed.totalPounds / 130),
  
      
      
    })

  }

    
    
    
  return (
    <React.Fragment>
      <form onSubmit={handleSellFeedFormSubmission}>
        <label htmlFor="poundsSold">Number of pounds sold:</label>
        <input type='number' name='poundsSold' placeholder="number of lbs"/>
        <button type='submit'>Process sale</button>
      </form>
    </React.Fragment>
  );
}


sellFeedForm.propTypes = {
  onSellFeed: PropTypes.func,
  feed: PropTypes.object
}

export default sellFeedForm;