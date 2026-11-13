import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus excepturi minus at cupiditate corporis nemo, temporibus provident illo itaque, quaerat aut doloremque dolorum nobis! Iusto, recusandae. Similique, natus. Ipsum, impedit.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-233-12332-122</li>
                    <li>Dummy@tomato.com</li>
                </ul>
            </div>
        {/* <hr/> */}
        </div>
        {/* <p className='footer-copyright'>Copyright 2025 Tomato.com - All Right Reserved.</p> */}
    </div>
  )
}

export default Footer