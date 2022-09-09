import React from 'react';
import Feed from './feed';
import PropTypes from 'prop-types';

function MainInventoryList(props){
  return (
    <React.Fragment>
      {props.mainInventoryList.map((feed, index) => (
        <div className='card' key={index}>
          <Feed
            name={feed.name}
            quantity = {feed.quantity}
            pounds = {feed.pounds}
            price = {feed.price}
            whenFeedClicked = { props.onFeedSelection }
          />
        </div>
      ))}
    </React.Fragment>
  )
}

MainInventoryList.propTypes = {
  mainInventoryList: PropTypes.array,
  onGameSelection: PropTypes.func
};

export default MainInventoryList;