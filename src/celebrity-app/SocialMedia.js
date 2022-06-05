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
                <div className='social-logo'>
                    <div className='coloumn'>
                        <a href='https://mobile.twitter.com/ikamalhaasan?lang=en' target="_blank"><img src = {t1} id="img1"/></a>
                    </div>
                    <div className='coloumn'>
                        <a href="https://www.facebook.com/iKamalHaasan" target="_blank"><img src={f1} id="img2"/></a>
                    </div>
                    <div className='coloumn'>
                        <a href="https://www.instagram.com/ikamalhaasan/?hl=en" target="_blank"><img src={i1} id="img3"/></a>
                    </div>
                </div>
        </div>
    )
}

