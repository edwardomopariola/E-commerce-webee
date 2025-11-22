import React from 'react';
// import ProductSearch from './Components/ProductSearch';
import logo from './assets/shopping-logo.svg';


function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <a href="" target='_blank' rel="noopener noreferrer">
        <img 
          src={logo} 
          alt="Shopping Logo" 
          style={{ width: "200px", cursor: "pointer" }}
        />
      </a>
    </div>
  );
}

export default App;
