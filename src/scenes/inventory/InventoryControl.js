import React, { useState } from 'react';
import MainInventoryList from '../../components/mainInventoryList/MainInventoryList'
import FeedDetail from '../../components/FeedDetail';
import NewFeedForm from '../../components/NewFeedForm';
import SellFeedForm from '../../components/SellFeedForm';
// import Sidebar from '../../components/navbar/Sidebar';
import './InventoryControl.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


const Sidebar = ({handleShowForm, goHome}) => {
  return (
    <div className='sneeds__sidebar section__padding'>
      <div className='sneeds__sidebar-content'>
        <p onClick={() => handleShowForm()}>Add New Inventory</p>
        <p onClick={() => goHome()}>Home</p>
      </div>
    </div>
  )
}
const InventoryControl = () => {
  const [mainInventoryList, setMainInventoryList] = useState([]);
  const [selectedFeed, setSelectedFeed] = useState(null);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selling, setSelling] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  
  
  const clearSettings = () => {
    setSelectedFeed(null);
    setFormVisibleOnPage(false);
    setSelling(false);
  }
  const handleShowForm = () => {
    if(selectedFeed === null) { 
      setFormVisibleOnPage(true);
    } else {
      setFormVisibleOnPage(false);
      setSelling(false);
    }
  }
  
  const handleAddingFeedToList = (newFeed) => {
    const newMainInventoryList = mainInventoryList.concat(newFeed);
    setMainInventoryList(newMainInventoryList);
    setFormVisibleOnPage(false);
  };
  
  const handleSellClick = () => {
    setSelling(true);
  }
  
  const handleSoldFeedInList = (feedToSell) => {
    const updatedMainInventoryList = mainInventoryList.filter(feed => feed.id !== selectedFeed.id).concat(feedToSell);
    setMainInventoryList(updatedMainInventoryList);
    setSelling(false);
    setSelectedFeed(null);
  }
  
  const handleChangingSelectedFeed = (id) => {
    const selectedFeed =mainInventoryList.filter(feed => feed.id === id)[0];
    setSelectedFeed(selectedFeed);
   
  };
  
 
  let currentlyVisibleState = false;
  let buttonText = null;
  if(selling){
    currentlyVisibleState = <SellFeedForm feed={selectedFeed} onSellFeed={handleSoldFeedInList} />
    buttonText = "Return to Inventory";  
  } else if(selectedFeed != null){
    currentlyVisibleState = <FeedDetail feed= {selectedFeed} onClickingSell= {handleSellClick} />
    buttonText = 'Return to main inventory';
  } else if(formVisibleOnPage) {
    currentlyVisibleState = (
      <NewFeedForm onNewFeedCreation={handleAddingFeedToList} />
    );
    buttonText = "Return to List";
  } else {
    currentlyVisibleState = null;
    buttonText = "Add Feed";
  } 
  return (
    <div className='sneeds__inventory section__padding'>
      <div className='sneeds__inventory-sidebar'>
      {toggleMenu ?
          <RiCloseLine color='#000000' size={27} onClick={()=>setToggleMenu(false)}/> 
        : 
          <RiMenu3Line color='#000000' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='sneeds__inventory-sidebar_content'>
            <Sidebar handleShowForm={handleShowForm} goHome={clearSettings}/>
          </div>
        
        )}
      </div>
      <div>
        {currentlyVisibleState}
      </div>
      <div className='sneeds__inventory-forms'>
        <NewFeedForm onNewFeedCreation={handleAddingFeedToList}/>
      </div>
      <div className='sneeds__inventory-mainInventory'>
        {mainInventoryList.length > 0 ? 
          <MainInventoryList mainInventoryList={mainInventoryList} onFeedSelection={handleChangingSelectedFeed}/>
        :
        <p>Try adding some inventory</p>
        }
      </div>
    </div>
  )
}
  



export default InventoryControl;