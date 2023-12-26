import React from 'react'
import "./relatedProduct.css";
import data_products from "../../Assets/data"
import Item from "../../Components/Items/Item"


const RelatedProduct = () => {
  return (
    <div className='related_products'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts_item">
          {
          data_products.map((item, index)=>{
            return <Item
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                      />
          })
          }
      </div>
    </div>
  )
}

export default RelatedProduct
