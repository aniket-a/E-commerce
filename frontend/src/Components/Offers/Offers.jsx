import React from 'react'
import "./offer.css"
import exlusiveImg from "../../Assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className='offer'>

      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offers for You!</h1>
        <p>ONLY BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>

      <div className="offers_right">
        <img src={exlusiveImg} alt="" />
      </div>
    </div>
  )
}

export default Offers
