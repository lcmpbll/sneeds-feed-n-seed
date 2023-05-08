import React from 'react';
import Feed from '../feed/Feed';
import PropTypes from 'prop-types';
import './MainInventoryList.css';


function MainInventoryList(props){
  const {mainInventoryList, onFeedSelection} = props;

  return (
    <div className='sneeds__inventory-list'>
   
        {mainInventoryList.map((feeds) => (
          <div className='sneeds__inventory-feed' key={feeds.id}>
            <Feed
              name={feeds.name}
              quantity = {feeds.quantity}
              totalPounds = {feeds.totalPounds}
              bagPounds = {feeds.bagPounds}
              price = {feeds.price}
              whenFeedClicked = { onFeedSelection }
              id={feeds.id}
              // key={feeds.id}
              />
          </div>
        ))} 


    </div>
  )
}

MainInventoryList.propTypes = {
  mainInventoryList: PropTypes.array,
  onGameSelection: PropTypes.func
};

export default MainInventoryList;