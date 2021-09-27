import React from 'react';

import HeaderBarConteiner from './components/HeaderBar/HeaderBarConteiner';
import AppRouter from './components/AppRouter';
import stl from './style/App.module.css';

const App = () => {

  return (
    <div className={stl.conteiner}>
      <h1>Hello calendar</h1>
      <div className={stl.wrapp}>
        <HeaderBarConteiner />
       
        <AppRouter/>
      </div>
    </div>
  );
};

export default App;