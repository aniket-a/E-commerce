import React, { useContext } from 'react'
import "./CSS/shopCategory.css";
import { ShopContext } from '../Context/ShopContext';
import dropdownIcon from "../Assets/dropdown_icon.png"
import Item from "../Components/Items/Item"

const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext);

  return (
    <div className='shopCategory'>
      <img className='shopcategory_banner' src={props.banner} alt="" />

      <div className="shopcategory_indexSort">

        <p>
          <span>Showing 1</span>
          o ut of 36 products
        </p>

        <div className="shopcategory_Sort">
          Sory by <img src={dropdownIcon} alt="" />
        </div>

      </div>
      <div className="shopcategory_products">
        {
          all_product.map((item, index)=>{
            if (props.category === item.category){
              return <Item
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                      />
            }else{
              return null;
            }
          })
        }
      </div>
      <div className="shopcategory_loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
