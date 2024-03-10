import React from 'react';
import CV from '../../assets/Saiyam_SFDCResume_24.pdf';

const contact = () => {

    return (
        <div className='contact'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href='#contacts' className='btn btn-primary'>Contact Me</a>
        </div>
    )
}

export default contact