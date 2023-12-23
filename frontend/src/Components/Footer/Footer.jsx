import React from 'react'
import "./footer.css"
import footer_logo from "../../Assets/logo_big.png"
import insta from "../../Assets/instagram_icon.png"
import pintrest from "../../Assets/pintester_icon.png"
import whatsaap from "../../Assets/whatsapp_icon.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_logo">
              <img src={footer_logo} alt="" />
              <p>SHOPPER</p>
        </div>
        <ul className="footer_links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer_social_icons">
        
            <div className="footer_icons_container">
                  <img src={insta} alt="" />
            </div>
            <div className="footer_icons_container">
                  <img src={pintrest} alt="" />
            </div>
            <div className="footer_icons_container">
                  <img src={whatsaap} alt="" />
            </div>
        </div>
        <div className="footer_copyright">
            <hr />
            <p>Copyright @2023 - All rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
