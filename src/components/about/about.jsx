import React from 'react';
import './about.css';
import { FaRankingStar } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h1 className="about__me">About Me</h1>
            <div className="about__container">
                <div className='about__content'>
                    <div className='about__cards'>

                        <article className='about__card'>
                            <FaUniversity />
                            <h5>Degree</h5>
                            <small>B.Tech. Information Technology <br /><i>SRM Institute of Science and Technology.</i></small>
                        </article>

                        <article className='about__card'>
                            <FaRankingStar />
                            <h5>CGPA</h5>
                            <small>9.31</small>
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

                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default About