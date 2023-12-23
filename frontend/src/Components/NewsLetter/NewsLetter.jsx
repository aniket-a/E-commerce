import React from 'react'
import "./newsletter.css";

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email!</h1>
        <p>Subscribe To Our Newsletter & Stay Updated!</p>
        <div className="">
            <input type="email" placeholder='Enter Your Email...' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
