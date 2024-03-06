import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import SingleProduct from '../Components/BreadCrums/SingleProduct';
import ProductDiasplay from '../Components/ProductDisplay/ProductDiasplay';
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const {productId} = useParams()

  const product = all_product.find((e) => e.id === Number(productId));
  
  return (
    <div className="main_producy_container">
      <SingleProduct product={product} />
      <ProductDiasplay product={product} />
      <DiscriptionBox />
    </div>
  );
}

export default Product
