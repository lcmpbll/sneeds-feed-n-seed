import React from 'react';
import Header from './scenes/header/Header';
import InventoryControl from './scenes/inventory/InventoryControl';
import Footer from './scenes/footer/Footer'
import './App.css';

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
      <div className='app'>
        <div className='sneeds__header'>
          <Header />
        </div>
          <InventoryControl />
        
       
          <Footer/>
    
      </div>
  
   
  );
}

export default App;
