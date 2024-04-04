// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/header/header';
import Experience from './components/experience/experience';
import Project from './components/projects/project';
import Contact from './components/header/contact'
import About from './components/about/about'
import Footer from './components/footer/footer'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Header />
      {/* <About /> */}
      {/* <Experience /> */}
      {/* <Project /> */}
      <Contact/>
      <About />
      <Experience />
      <Project />
      <Footer />
    </>
  );
}

export default App;
