import React from 'react';
import Header from './scenes/header/Header';
import InventoryControl from './components/InventoryControl';
import ContactInfo from './scenes/footer/Footer'

function App() {
  
  const pageStyles = {
    display: 'flex',
    flexDirection: 'column',
    position: "relative",
    
    height: '100%',
    backgroundColor: '#4D7093',
  }
  


  const inventoryStyles = {
    position: 'relative',
    height: '100%',
    top: '110px',
    backgroundColor: '#4D7093',
    textAlign: 'center',  
  }
  const contactStyles = {
    
    position: 'relative',
    margin: '300px',
    
  }
  
  return (
      <div style={pageStyles}>
          <Header />

        
          <InventoryControl />
        
       
          <ContactInfo />
    
      </div>
  
   
  );
}

export default App;
