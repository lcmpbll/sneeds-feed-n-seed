import React from 'react';
import PropTypes from 'prop-types';

function FeedDetail(props) {
  const { feed, onClickingSell} = props;
  console.log(props);
  return (
    <div  className='sneeds__feed' key={feed.id}>
      <div className='sneeds__feed-card'>
      <h1>{feed.name} Details</h1>
      <h2>Unopened bags: {feed.quantity}</h2>
      <h4>Open bag weight: {feed.bagPounds}</h4>
      <h4>Price per lb: {feed.price}</h4>
      <button onClick= {onClickingSell}>Sell {feed.name}</button>
      </div>
    </div>
  );
}

FeedDetail.propTypes = {
  feed: PropTypes.object,
  onClickingSell: PropTypes.func
};

export default FeedDetail;