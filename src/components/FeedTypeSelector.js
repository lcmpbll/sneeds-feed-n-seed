import React from 'react';
import PropTypes from 'prop-types';

function FeedTypeForm(){
  function typeSubmissionHandler(event) {
    event.preventDefault();
    let selectedCategory = event.target.feedTypeSelected.value;
    console.log(selectedCategory);
    return selectedCategory;
  }
  return (
    <React.Fragment>
      <form onSubmit={typeSubmissionHandler}>
        <div>
        <input type='radio' value='feed' name='feedTypeSelected'/> Feed 
        <input type='radio' value='seed' name='feedTypeSelected'/> Seed 
        <input type='radio' value='other' name='feedTypeSelected'/> Other 
        <input type='radio' value='none' name='feedTypeSelected' defaultChecked/> All 
        <br/>
        <br/>
        <button type='submit' className='btn'>View Selected Category</button>
      </div>
    </form>
    <br/>
    </React.Fragment>
  )
}

FeedTypeForm.propTypes = {
  typeSubmissionHandler: PropTypes.func
}

export default FeedTypeForm;