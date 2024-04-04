// import logo from './logo.svg';
import React from 'react';
import Header from './components/header/header';
// import About from './components/about/about';
import './App.css';
import Experience from './components/experience/experience';
import Project from './components/projects/project';

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
    </>
  );
}

export default App;
