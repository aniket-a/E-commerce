import React, { useContext, useEffect } from 'react'
import "./productDisplay.css";
import starIcon from "../../Assets/star_icon.png"
import starDull from "../../Assets/star_dull_icon.png"
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const ProductDiasplay = (props) => {

    const { addToCart } = useContext(ShopContext);

    const location = useLocation()  
    const {product} = props

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [location.pathname])

  return (
    <div className="productDisplay">
      <div className="productDisplay_left">
      
        <div className="productdisplay_img_list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        
        <div className="product_display_img">
          <img
            className="product_display_main_img"
            src={product.image}
            alt=""
          />
        </div>

      </div>

      
    </div>
  );
}

export default ProductDiasplay
