import React, { useEffect, useState, useContext } from 'react';
import './experience.css';
import { FaLaptopCode } from "react-icons/fa";

const Experience = () => {
    return (
        <div class="body_Class">
            <h1 className="experience__header">Experience</h1>
            <div class="timeline">
                <div class="container left">
                    <div class="date">Feb 2022 - Current</div>
                    <i class="icon"><FaLaptopCode /></i>
                    <div class="content">
                        <h2>Akamai Technologies</h2>
                        <h5 className="job__position">Software Engineer II</h5>
                        <p> Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium. </p>
                    </div>
                </div>
                <div class="container right">
                    <div class="date">Sept 2020 - Feb 2022</div>
                    <i class="icon"><FaLaptopCode /></i>
                    <div class="content">
                        <h2>Capgemini India Pvt Ltd</h2>
                        <h5 className="job__position">Senior Analyst</h5>
                        <p> Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium. </p>
                    </div>
                </div>
                <div class="container left">
                    <div class="date">Jan 2020 - Mar 2020</div>
                    <i class="icon"><FaLaptopCode /></i>
                    <div class="content">
                        <h2>Capgemini India Pvt Ltd</h2>
                        <h5 className="job__position">Senior Analyst Intern</h5>
                        <p> Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;