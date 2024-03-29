import React from 'react';
import './experience.css'

const Experience = () => {
    return (
        <div id="timeline-content">
            <h1>Timeline</h1>
            <ul className="timeline">
                <li className="event" data-date="65Million B.C.">
                    <h3>Dinosaurs Roamed the Earth</h3>
                    <p>RAWWWWWWRRR 🐢🦂</p>
                </li>
                <li className="event" data-date="2005">
                    <h3>Creative Component Launched</h3>
                    <p>"We can be all things to all people!" 📣</p>    
                </li>
                <li className="event" id="date" data-date="2009">
                    <h3>Squareflair was Born</h3>
                    <p></p> <p>"We can be all things to Squarespace users!" 📣</p>    
                </li>
                <li className="event" data-date="2021">
                    <h3>Squareflair Today</h3>
                    <p>"We design and build from scratch!" 📣</p> <p>When we say <em><strong>100% custom</strong></em> we mean it— and we build all sites on the Squarespace Developer platform.</p>
                    <p>Did you know that all of our pixels are hand-forged from the rarest of subpixels grown and harvested in the <em>Nerd Forest</em>? <br/>🤜💥🤛</p>
                    <p><strong>Our success can be measured by lives and brands enhanced by 9+ years of 100% Squarespace-focused service!</strong></p>
                </li>
            </ul>
        </div>
    )
}

export default Experience