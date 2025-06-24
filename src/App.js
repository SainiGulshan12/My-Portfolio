import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Skills from './Components/Skills/skill';
import Project from './Components/Projects/project';
import Contact from './Components/Contact/contact';
import Lightmode from './Components/lightmode/lightmode';

function App() {
  return (
    <div className="App">
      <Lightmode />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/skill' element={<Skills />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
