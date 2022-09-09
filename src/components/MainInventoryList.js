import React from 'react';
import Feed from './Feed';
import PropTypes from 'prop-types';

function MainInventoryList(props){
  return (
    <React.Fragment>
      {props.mainInventoryList.map((feeds, index) => (
        <div className='card' key={index}>
          <Feed
            name={feeds.name}
            quantity = {feeds.quantity}
            pounds = {feeds.pounds}
            price = {feeds.price}
            whenFeedClicked = { props.onFeedSelection }
            id={feeds.id}
            key={feeds.id}
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