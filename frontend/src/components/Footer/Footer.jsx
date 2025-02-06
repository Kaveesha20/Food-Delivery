import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">

                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Thank you for choosing Tomato for your food ordering needs. We are committed to providing you with the best dining experience by offering a wide variety of delicious meals, prompt delivery, and exceptional customer service. Enjoy your meal, and don't forget to leave us your feedback to help us serve you better. Bon appétit!</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>tomatodel@gmail.com</li>
                        <li>+94 123456789</li>
                    </ul>

                </div>

            </div>
            <hr />
            <p className='footer-copyright'> Copyright 2024 © Tomato.com-All rights reserved.</p>
        </div>

    )
}

export default Footer
