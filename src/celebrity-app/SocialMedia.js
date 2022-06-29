import React from 'react';
import t1 from '../images/twitter.png';
import f1 from '../images/facebook.png';
import i1 from '../images/instagram.png';
import './style.css'

export const SocialMedia = () => {
    return(
        <div className='socialmedia'>
            <div className='header'>
                <h1>Social Media Links of Kamal Haasan</h1>
            </div>
                <div className='social'>
                    <a href='https://mobile.twitter.com/ikamalhaasan?lang=en' target="_blank"><img src = {t1} className="social-logo" /></a>
                    <a href="https://www.facebook.com/iKamalHaasan" target="_blank"><img src={f1} className="social-logo"  /></a>
                    <a href="https://www.instagram.com/ikamalhaasan/?hl=en" target="_blank"><img src={i1} className="social-logo"/></a>
                </div>
        </div>
    )
}

