import React, {useState} from 'react';
import './Logo.css';

const Logo = () => {
  const [nFlip, setNFlip] = useState(false)
  setTimeout(() => {
    setNFlip(!nFlip)
  }, 3000);
  return (
    <div>
      <h1>Sneed's Feed {nFlip ? <span id='n'>N</span> : 'N'} Seed</h1>
    </div>
  );
}

export default Logo