import React, {useState} from 'react';
import './Logo.css';

const Logo = ({main}) => {
  const [nFlip, setNFlip] = useState(false)
  setTimeout(() => {
    setNFlip(!nFlip)
  }, 3000);
  return (
    <div>
      {main ? 
        <h1>Sneed's Feed {nFlip ? <span id='n'>N</span> : 'N'} Seed</h1>
        : 
        <h4>Sneed's Feed {nFlip ? <span id='n'>N</span> : 'N'} Seed</h4>
      }
    </div>
  );
}

export default Logo