import NavBar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import React from 'react'
import Skills from './components/skills'


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills/>
      <Portfolio />
      <Contact />

    </div>
  );
}

export default App;
