import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import SingleProduct from '../Components/BreadCrums/SingleProduct';
import ProductDiasplay from '../Components/ProductDisplay/ProductDiasplay';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId));
  console.log(product)
  return (
    <div>
        <SingleProduct product={product} />
        <ProductDiasplay product={product} />
    </div>
  )
}

export default Product
