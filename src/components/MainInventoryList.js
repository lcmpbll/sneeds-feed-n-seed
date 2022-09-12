import React from 'react';
import Feed from './Feed';
// import FeedTypeForm from './FeedTypeSelector';
import PropTypes from 'prop-types';

function MainInventoryList(props){
  return (
    <React.Fragment>
      {props.mainInventoryList.map((feeds) => (
        <div className='card' key={feeds.id}>
          <Feed
            name={feeds.name}
            quantity = {feeds.quantity}
            totalPounds = {feeds.totalPounds}
            bagPounds = {feeds.bagPounds}
            price = {feeds.price}
            feedType= {feeds.feedType}
            whenFeedClicked = { props.onFeedSelection }
            id={feeds.id}
            
          />
        </div>
      ))}
    </React.Fragment>
  )
}

MainInventoryList.propTypes = {
  mainInventoryList: PropTypes.array,
  onFeedeSelection: PropTypes.func
};

export default MainInventoryList;