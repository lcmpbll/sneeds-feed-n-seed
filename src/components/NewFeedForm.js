import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function NewFeedForm(props) {
  function handleNewFeedFormSubmission(event){
    event.preventDefault();
    props.onNewFeedCreation({
      name: event.target.name.value,
      quantity: parseInt(event.target.quantity.value),
      pounds: parseInt(event.target.quantity.value) * 130,
      price: parseInt(event.target.value),
      id: v4(),
    });
    console.log('you created' + event.target.name.value);
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