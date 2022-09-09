import React from 'react';
import Feed from './Feed';
import PropTypes from 'prop-types';

function MainInventoryList(props){
  return (
    <React.Fragment>
      {props.inventory.map((feeds, index) => (
        <div className='card'>
          <Feed
            name={feeds.name}
            quantity = {feeds.quantity}
            pounds = {feeds.pounds}
            price = {feeds.price}
            whenFeedClicked = { props.onFeedSelection }
            key= {index}
          />
        </div>
      ))}
    </React.Fragment>
  )
}

MainInventoryList.propTypes = {
  inventoryList: PropTypes.array,
  onGameSelection: PropTypes.func
};

export default MainInventoryList;