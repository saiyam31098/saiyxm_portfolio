import './about.css';
import { FaRankingStar } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
    return (
        <section>
            <h3>Get to Know</h3>
            <h1>About Me</h1>

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
            </div>

        </section>
    )
}

export default About