import React, { useEffect, createRef } from 'react';
import './App.css';

import logo from 'images/oroborus-light.png';

const App = () => {
  const animationContainer = createRef<HTMLDivElement>();
  return (
    <div className="App">
      <img src={logo} />
      <p>Em breve</p>
    </div>
  );
};

export default App;
