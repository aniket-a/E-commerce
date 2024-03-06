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

      <div className="productDisplay_right">
        <h1>{product.name}</h1>
        <div className="product_display_right_start">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starDull} alt="" />
          <p>(122)</p>
        </div>
        <div className="product_display_right_price">
          <div className="product_display_right_price_old">
            ${product.old_price}
          </div>
          <div className="product_display_right_price_new">
            ${product.new_price}
          </div>
        </div>

        <div className="product_display_right_discription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          tempore fugiat aliquid vitae ad excepturi! Repellendus tempora vel ut
          dolores. Tenetur quibusdam, impedit inventore minus illo similique
          vitae eligendi qui!
        </div>
        
        <div className="product_display_right_size">
          <h1>Select Size:</h1>
          <div className="product_display_right_sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=> {addToCart(product.id)}}>ADD TO CART</button>
        <p className="product_display_right_category">
          <span>Category:</span>Women, T shirt , Crop Top
        </p>

        <p className="product_display_right_category">
          <span>Category:</span>Morden Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDiasplay
