import React from 'react';
import Twitter from '../assets/twitter-icon.svg'
import Facebook from '../assets/facebook-icon.svg'
import Instagram from '../assets/instagram-icon.svg'
import Github from '../assets/github-icon.svg'

const Footer = () => {
    return (
        <div className='footer--container'>
            <picture className='footer-picture'>
                <a href="https://www.twitter.com" target='_blank'>
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://www.facebook.com/johnxlerry" target='_blank'>
                    <img src={Facebook} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/johnxlerry/" target='_blank'>
                    <img src={Instagram} alt="Instagram" />
                </a>
                <a href="https://github.com/JLerry005" target='_blank'>
                    <img src={Github} alt="Github" />
                </a>
            </picture>
        </div>
    )
}

export default Footer;