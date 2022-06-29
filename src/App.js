import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { AddCotheForm } from './features/GardropFeatures/AddClotheForm';
import { ClothesList } from './features/GardropFeatures/ClothesList';
import LoginPage from './features/Pages/LoginPage';
import MainMenu from './features/Pages/MainMenu';
import MyGardrop from './features/Pages/MyGardrop';
function App() {
  return (
    
/*     <div className="App">
 
      <LoginPage />
      <AddCotheForm /> 
      <ClothesList />
    </div>

 */
<div>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginPage></LoginPage>} />
    <Route path="/my-gardrop" element={<MyGardrop></MyGardrop>} />
    <Route path="/main-menu" element={<MainMenu></MainMenu>} />
  </Routes>
</BrowserRouter> 

</div>
  );
}

export default App;
