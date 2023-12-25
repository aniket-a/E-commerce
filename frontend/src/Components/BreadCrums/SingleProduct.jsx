import React from 'react'
import "./simgleproduct.css";
import arrowIcon from "../../Assets/breadcrum_arrow.png"

const SingleProduct = (props) => {
  const {product} = props
  return (
    <div className='singleproducts'>
      HOME <img src={arrowIcon} alt="" /> SHOP <img src={arrowIcon} alt="" /> {product.category} <img src={arrowIcon} alt="" /> {product.name}
    </div>
  )
}

export default SingleProduct
