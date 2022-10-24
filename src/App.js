import NavBar from './components/navbar'
import Home from './components/home'
import About from'./components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import React from 'react'


function App() {
  return (
    <div>
     <NavBar />
     <Home />
     <About />
     <Portfolio />
     <Contact />

    </div>
  );
}

export default App;
