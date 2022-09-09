import React from 'react';
import Feed from './Feed';
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
            whenFeedClicked = { props.onFeedSelection }
            id={feeds.id}
            // key={feeds.id}
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