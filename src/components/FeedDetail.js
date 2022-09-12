import React from 'react';
import PropTypes from 'prop-types';

function FeedDetail(props) {
  const { feed } = props;
  
  return [
    <React.Fragment  key={feed.id}>
      <h1>{feed.name} Details</h1>
      <h2>Total bags: {feed.quantity}</h2>
      <h4>Current bag remaining: {feed.bagPounds}</h4>
      <h4>Price per lb: {feed.price}</h4>
      <p>Feed type: {feed.feedType}</p>
     
      <hr />
    </React.Fragment>
  ]
}

FeedDetail.propTypes = {
  feed: PropTypes.object,
};

export default FeedDetail;