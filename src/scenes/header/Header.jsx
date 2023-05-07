import React, {useState} from 'react';
import Logo from '../../components/logo/Logo';
import './Header.css';


function Header() {
  const [nFlip, setNFlip] = useState(false)
  setTimeout(() => {
    setNFlip(!nFlip)
  }, 3000);
  return(
    <div className='sneeds__header'>
      <div className='sneeds__header-content'>
        <Logo/>
      </div>
    </div>
  )
}

export default Header;