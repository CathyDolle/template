import './Library.scss'
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Page1 from './pages/Page1';
import Home from './Home';

function App() {

  return (
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/page1" element={<Page1 />}/>
   </Routes>
  )
}


export default App
