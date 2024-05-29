import React from 'react';
import CV from '../../assets/Saiyam_SFDCResume_24.pdf';

const Contact = () => {

    return (
        <div className='contact'>
            <a href={CV} download className='btn'>Download CV</a>
            {/* <a href='' download className='btn'>Download CV</a> */}
            <a href="mailto:saiyamjain.dev@gmail.com" className='btn btn-primary'>Contact Me</a>
        </div>
    )
}

export default Contact