import React from 'react';
import Header from './Header';
import InventoryControl from './InventoryControl';

function App() {
  return (
    <React.Fragment>
      <div className='jubmotron text-center'>
        <Header />
      </div>
      <div className='container'>
        <InventoryControl />
      </div>
    </React.Fragment>
   
  );
}

export default App;
