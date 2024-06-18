import React from 'react';
import './project.css';
import SF_IMG from '../../assets/project__salesforce.jpg'
import SALASAR_IMG from '../../assets/project__SalasarWebsite.jpg';
import PORTFOLIO_IMG from '../../assets/project_porfolio_website.jpg';


const Project = () => {
    return (
        <section id="myprojects">
        <div className="project__container">
            <h5 className="project__lightHeader">My Recent Works</h5>
            <h2 className="project__header">Projects</h2>

            <div className="portfolio__container">
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={SF_IMG} alt="" />
                    </div>
                    <h3>IPL Dashboard - Salesforce</h3>
                    <small className='text-light'>LWC | JS | Apex | Rest API</small>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/saiyam31098/ipl-sf-dashboard" target="_blank" rel='noreferrer' className='btn'>Github</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={PORTFOLIO_IMG} alt="" />
                    </div>
                    <h3>My Portfolio Website (v1)</h3>
                    <small className='text-light'>ReactJs | HTML | CSS | Firebase</small>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/saiyam31098/saiyxm_portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
                        <a href="https://jainsaiyam.com" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={SALASAR_IMG} alt="" />
                    </div>
                    <h3>Salasar Mills Website</h3>
                    <small className='text-light'>HTML | CSS | Bootstrap | Firebase</small>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/saiyam31098/salasar-website" target="_blank" rel='noreferrer' className='btn'>Github</a>
                        <a href="https://salasardyeing.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={SF_IMG} alt="" />
                    </div>
                    <h3>Order Management - Salesforce</h3>
                    <small className='text-light'>LWC | JS | Apex</small>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/saiyam31098/Order-Management-System-Salesforce" target="_blank" rel='noreferrer' className='btn'>Github</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={SF_IMG} alt="" />
                    </div>
                    <h3>Paypal Clone - Salesforce</h3>
                    <small className='text-light'>LWC | JS | Apex</small>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/saiyam31098/" target="_blank" rel='noreferrer' className='btn'>Github</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={SF_IMG} alt="" />
                    </div>
                    <h3>Bookclub Website</h3>
                    <small className='text-light'>HTML | CSS | PHP | MySQL</small>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/saiyam31098/bookclub" target="_blank" rel='noreferrer' className='btn'>Github</a>
                    </div>
                </article>
            </div>
        </div>
        </section>
    )   
}

export default Project