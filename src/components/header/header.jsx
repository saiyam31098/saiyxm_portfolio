import React from 'react';
// import Contact from './contact'
// // import Scroll from '../scroll/scroll'
// import About from '../about/about'
// import Experience from '../experience/experience'
// import Project from '../projects/project'
import './header.css'

const Header = () => {
    return (
        <section id="home">
        <header>
            <div className="header__container">
                <h5>Hello, I'm</h5>
                <h1>Saiyam Jain</h1>
                <h5 className="text-light">Software Engineer</h5>
                {/* <Contact/>
                <About />
                <Experience />
                <Project /> */}
            </div>
        </header>
        </section>
    )
}

export default Header