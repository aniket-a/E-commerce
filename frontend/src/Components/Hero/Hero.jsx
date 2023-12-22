import React from 'react'
import "./hero.css";
import handIcon from "../../Assets/hand_icon.png"
import arrowIcon from "../../Assets/arrow.png"
import heroImage from "../../Assets/hero_image.png"

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero_container">

                <div className="hero_left">
                    <h2>NEW ARRIVALS ONLY</h2>
                    <div>
                        <div className="hand_hand_icon">
                            <p>new</p>
                            <img src={handIcon} alt="" />
                        </div>
                        <p>Collections</p>
                        <p>for EveryOne</p>
                    </div>
                    <div className="hero_latest_btn">
                        <div>Letest Collection</div>
                        <img src={arrowIcon} alt="" />
                    </div>
                </div>

                <div className="hero_right">
                    <img src={heroImage} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Hero
