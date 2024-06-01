import React from 'react';
import './experience.css';
import { FaLaptopCode } from "react-icons/fa";
import AKAM_LOGO from '../../assets/Akamai.svg';
import CAPG_LOGO from '../../assets/capgemini-logo.svg';

const Experience = () => {
    return (
        <section id="experience">
        <div class="body__class">
            <h5 className="work__history">Work History</h5>
            <h2 className="experience__header">Experience</h2>
            <div class="timeline">
                <div class="container right">
                    <div class="date">July 2024 - Present</div>
                    <i class="icon"><FaLaptopCode /></i>
                    <div class="content">
                    <center><img src={AKAM_LOGO} className="experience__akamLogo" alt='Akamai Logo'></img></center>
                        {/* <h2>Akamai Technologies</h2> */}
                        <h5 className="job__position">Upcoming - Senior Software Engineer</h5>
                        <p> TBD after July month.
                            <br/>Stack used: Apex, LWC, Aura, Admin, Data Loader.
                        </p>
                    </div>
                </div>
                <div class="container left">
                    <div class="date">Feb 2022 - June 2024</div>
                    <i class="icon"><FaLaptopCode /></i>
                    <div class="content">
                        <center><img src={AKAM_LOGO} className="experience__akamLogo" alt='Akamai Logo'></img></center>
                        {/* <h2>Akamai Technologies</h2> */}
                        <h5 className="job__position">Software Engineer II</h5>
                        <p> Build and develop complex and critical solutions by collaborating with cross-functional teams including developers, testers, designers and Program Managers. 
                            <br/>Stack used: Apex, LWC, Aura, Mulesoft, Data Loader, Big Panda, React.
                        </p>
                    </div>
                </div>
                <div class="container right">
                    <div class="date">Sept 2020 - Feb 2022</div>
                    <i class="icon"><FaLaptopCode /></i>
                    <div class="content">
                        <center><img src={CAPG_LOGO} className="experience__capgLogo" alt='Capgemini Logo'></img></center>
                        {/* <h2>Capgemini India Pvt Ltd</h2> */}
                        <h5 className="job__position">Senior Analyst</h5>
                        <p> Worked as a Salesforce Dev, developed and impelemented multiple solutions for one of the largest beverage manufactures in the world. Built multiple automations which helped reduce manual work. 
                            <br/>Stack used: Apex, LWC, Aura, Admin, Data Loader.
                        </p>
                    </div>
                </div>
                <div class="container left">
                    <div class="date">Jan 2020 - Mar 2020</div>
                    <i class="icon"><FaLaptopCode /></i>
                    <div class="content">
                        <center><img src={CAPG_LOGO} className="experience__capgLogo" alt='Capgemini Logo'></img></center>
                        {/* <h2>Capgemini India Pvt Ltd</h2> */}
                        <h5 className="job__position">Senior Analyst Intern</h5>
                        <p> Trained on Salesforce, Java, SQL, Angular. Developed and collaborated as a team to build projects such as Order Management System.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Experience;