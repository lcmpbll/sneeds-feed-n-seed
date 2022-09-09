import React from 'react';
import MainInventoryList from './MainInventoryList'
import FeedDetail from './FeedDetail';
import NewFeedForm from './NewFeedForm';
import SellFeedForm from './SellFeedForm';

class InventoryControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage : false,
      selectedFeed: null,
      mainInventoryList : [],
      selling: false,
    }
    this.handleShowForm = this.handleShowForm.bind(this);
  }
 
  handleShowForm = () => {
    if(this.state.selectedFeed === null) { 
      this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  
    } else {
      this.setState({
        formVisibleOnPage: false,
        selectedFeed: null,
        selling: false
      });
     
    }
  }
  
  
  handleAddingFeedToList = (newFeed) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newFeed);
    this.setState({ mainInventoryList: newMainInventoryList});
  }
  
  handleSellClick = () => {
    
    this.setState({selling: true});
  }
  
  handleSoldFeedInList = (feedToSell) => {
    const updatedMainInventoryList = this.state.mainInventoryList.filter(feed => feed.id !== this.state.selectedFeed.id).concat(feedToSell);
    this.setState({
      mainInventoryList: updatedMainInventoryList,
      selling: false,
      selectedFeed: null
    });
  }
  
  handleChangingSelectedFeed = (id) => {
    const selectedFeed = this.state.mainInventoryList.filter(feed => feed.id === id)[0];
    this.setState({selectedFeed: selectedFeed});
   
  }
  
  render() {
    let currentlyVisibleState = false;
    let buttonText = null;
    if(this.state.selling){
      currentlyVisibleState = <SellFeedForm feed={this.state.selectedFeed} onSellFeed={this.handleSoldFeedInList} />
      buttonText = "Return to Inventory";  
    } else if(this.state.selectedFeed != null){
      currentlyVisibleState = <FeedDetail feed= {this.state.selectedFeed} onClickingSell= {this.handleSellClick} />
      buttonText = 'Return to main inventory';
    } else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewFeedForm onNewFeedCreation={this.handleAddingFeedToList} />
      );
      buttonText = "Return to List";
    } else {
      currentlyVisibleState = <MainInventoryList mainInventoryList={this.state.mainInventoryList} onFeedSelection={this.handleChangingSelectedFeed} />
      buttonText = "Add Feed";
    } 
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button 
          type="button"
          onClick={this.handleShowForm}
          className='btn btn-warning' 
        >
          {buttonText}
        </button>
      </React.Fragment>
    )
  }
  
}


export default InventoryControl;