import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>Feed or Seed Name:</label>
          <input type='text' className='form-control' name='name' />
        </div>
        <div className='mb-3'>
          <label htmlFor='quantity' className='form-label'>Quantity of bags added</label>
          <input type='number' className='form-control' name='quantity' />
        </div>
        <div className='mb-3'>
          <label htmlFor='feedType' className='form-label'>Type, feed, seed, or other:</label>
          <select name='feedType'>
            <option name='feedType' value='feed'>Feed</option>
            <option name='feedType' value='seed'>Seed</option>
            <option name='feedType' value='other'>Other</option>
          </select>
        </div>
        <div className='mb-3'>  
          <label htmlFor='price' className='form-label'>Price per lb:</label>
          <input type='number' className='form-control' name='price' />
        </div>  
        <button type='submit' className='btn btn-success'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};
export default ReusableForm;