import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewFeedForm(props) {
  function handleNewFeedFormSubmission(event){
    event.preventDefault();
    props.onNewFeedCreation({
      name: event.target.name.value,
      quantity: parseInt(event.target.quantity.value),
      totalPounds: parseInt(event.target.quantity.value) * 130,
      bagPounds: 130,
      price: parseInt(event.target.price.value),
      id: v4(),
    });
    
  }
  
  return(
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewFeedFormSubmission}
        buttonText="Add Feed" />
      
    </React.Fragment>
  )
}

NewFeedForm.propTypes = {
  onNewFeedCreation: PropTypes.func,
};

export default NewFeedForm;