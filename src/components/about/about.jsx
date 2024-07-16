import React from 'react';
import './about.css';
import { FaRankingStar } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2 className="about__me">About Me</h2>
            <div className="about__container">
                <div className='about__content'>
                    <div className='about__cards'>

                        <article className='about__card'>
                            <FaUniversity />
                            <h5>Degree</h5>
                            <small>B.Tech. Information Technology <br /><i>SRM Institute of Science and Technology.</i></small>
                        </article>

                        <article className='about__card'>
                            <FaLaptopCode />
                            <h5>Current Position</h5>
                            <small>Senior Software Engineer <br /><i>Akamai Technologies</i></small>
                        </article>

                        <article className='about__card'>
                            <TfiWorld />
                            <h5>Domains</h5>
                            <small>
                                <ul>
                                    <li>Full Stack</li>
                                    <li>Salesforce</li>
                                    <li>MuleSoft</li>
                                </ul>
                            </small>
                        </article>
                    </div>

                    <p class="about__description">
                    Hi There! I am an innovative software engineer with over 4 years of experience, always looking for the next adventure. I’m well-versed in a range of programming languages and have expertise in Salesforce full-stack development. 
                    I am based out of Bangalore, India. My main focus these days is building accessible and scalable CRM solutions for our users and customers at Akamai. 
                    When I’m not at the computer, I’m usually working out, playing games, reading, hanging out with my friends, or thinking of what new to do next.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default About