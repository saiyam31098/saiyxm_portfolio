import React from 'react';
import Contact from './contact'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>Saiyam Jain</h1>
                <h5 className="text-light">Software Engineer</h5>
                <Contact/>
            </div>
        </header>
    )
}

export default Header