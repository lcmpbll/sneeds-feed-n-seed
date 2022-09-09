import React from 'react';



function Header() {
  const headerBackwardStyles = {
    display: 'inline-block',
    mozTransform: 'scale(-1, 1)',
    webkitTransform: 'scale(-1, 1)',
    transform: 'scale(-1, 1)'
  }
  return(
    <React.Fragment>
      <h1>Sneed's Feed <span style={headerBackwardStyles}>N</span> Seed</h1>
    </React.Fragment>
  )
}

export default Header;