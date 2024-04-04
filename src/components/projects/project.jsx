import React from 'react';
import './project.css';
import SF_IMG from '../../assets/project_salesforce.jpg'

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
                    <h3>Project Title</h3>
                    <small className='text-light'>Spring Boot | ReactJs | MySQL</small>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/saiyam31098/" target="_blank" rel='noreferrer' className='btn'>Github</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={SF_IMG} alt="" />
                    </div>
                    <h3>Project Title</h3>
                    <small className='text-light'>Spring Boot | ReactJs | MySQL</small>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/saiyam31098/" target="_blank" rel='noreferrer' className='btn'>Github</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={SF_IMG} alt="" />
                    </div>
                    <h3>Project Title</h3>
                    <small className='text-light'>Spring Boot | ReactJs | MySQL</small>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/saiyam31098/" target="_blank" rel='noreferrer' className='btn'>Github</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={SF_IMG} alt="" />
                    </div>
                    <h3>Project Title</h3>
                    <small className='text-light'>Spring Boot | ReactJs | MySQL</small>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/saiyam31098/" target="_blank" rel='noreferrer' className='btn'>Github</a>
                        <a href="https://saiyam31098.github.io/saiyxm_portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={SF_IMG} alt="" />
                    </div>
                    <h3>Project Title</h3>
                    <small className='text-light'>Spring Boot | ReactJs | MySQL</small>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/saiyam31098/" target="_blank" rel='noreferrer' className='btn'>Github</a>
                        <a href="https://saiyam31098.github.io/saiyxm_portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={SF_IMG} alt="" />
                    </div>
                    <h3>Project Title</h3>
                    <small className='text-light'>Spring Boot | ReactJs | MySQL</small>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/saiyam31098/" target="_blank" rel='noreferrer' className='btn'>Github</a>
                        <a href="https://saiyam31098.github.io/saiyxm_portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
                    </div>
                </article>
            </div>
        </div>
        </section>
    )   
}

export default Project