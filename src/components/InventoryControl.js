import React from 'react';
import MainInventoryList from './MainInventoryList'
import FeedDetail from './FeedDetail';
import NewFeedForm from './NewFeedForm';

class InventoryControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage : false,
      selectedFeed: null,
      mainInventoryList : []
    }
    this.handleShowForm = this.handleShowForm.bind(this);
  }
  //toggles?
  handleShowForm = () => {
    if(this.state.selectedFeed === null) { 
      this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  
    } else {
      this.setState({
        formVisibleOnPage: false,
        selectedFeed: null,
      });
     
    }
  }
  
  handleAddingFeedToList = (newFeed) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newFeed);
    this.setState({ mainInventoryList: newMainInventoryList});
  }
  
  handleChangingSelectedFeed = (id) => {
    const selectedFeed = this.state.mainInventoryList.filter(feed => feed.id === id)[0];
    this.setState({selectedFeed: selectedFeed});
   
  }
  
  render() {
    let currentlyVisibleState = false;
    let buttonText = null;
    
    if(this.state.selectedFeed != null){
      currentlyVisibleState = <FeedDetail feed= {this.state.selectedFeed} />
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