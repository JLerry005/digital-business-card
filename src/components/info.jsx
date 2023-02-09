import React from 'react';
import Image from '../assets/img.png'
import Linkedin from '../assets/linkedin.svg'
import Email from '../assets/mail-icon-button.svg'

const Info = () => {
    return (
        <div className='info--container'>
            <img className='info--image' src={Image} alt="image" />
            <div className='info--details'>
                <h3 className='info--name'>John Lerry Hapatinga</h3>
                <p className='info--position'>Junior Frontend Developer</p>
                <p className='info--link'>
                    <a className="info--weblink" href="https://johnlerryhapatinga.carrd.co/" target='_blank'>johnlerryhapatinga.carrd.co</a>
                </p>
            </div>
            <div className='info--button-container'>
                <a href='mailto: hapatingajohnlerry@gmail.com' className='info--email' target='_blank'>
                    <img className='info--img-email' src={Email} alt="email" />
                    Email
                </a>
                <a href='https://www.linkedin.com/in/johnxlerry/' className='info--linkedIn' target='_blank' tooltip="LinkedIn">
                    <img className='info--img-linkedin' src={Linkedin} alt="Linkedin" />
                    LinkedIn
                </a>
            </div>
        </div>
    )
}

export default Info;