import React, {useState} from 'react';
import Logo from '../../components/logo/Logo';
import './Header.css';


function Header() {
  return(
    <div className='sneeds__header section__padding'>
      <div className='sneeds__header-content'>
        <Logo main={true}/>
      </div>
    </div>
  )
}

export default Header;