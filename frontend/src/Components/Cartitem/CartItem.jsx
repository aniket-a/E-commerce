import React, { useContext } from "react";
import "./cartitem.css"
import { ShopContext } from "../../Context/ShopContext";
import removeIcone from "../../Assets/cart_cross_icon.png"
const Cart = () => {
  const { gotTotalCartAmount, all_product, cartItems, addToCart, removeToCart } = useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="cart_item_format_main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      <div className="cartitem_format ">
        {
          all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div key={e.id}>
                  <div className="cart_item_format cart_item_format_main">
                    <img className="cartIcon_PtoductIcon" src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>$ {e.new_price}/-</p>
                    <button className="cartitemsQuantity">{cartItems[e.id]}</button>
                    <p>{e.new_price * cartItems[e.id]}/-</p>
                    <img className="cart_items_remove_icon" src={removeIcone} onClick={() => removeToCart(e.id)} alt="" />
                  </div>
                  <hr />
                </div>
              )
            }
            return null
          })}
      </div>
      <div className="cart_item_down">

        <div className="cart_items_total">
          <h1>Carts Total</h1>
          <div>
            <div className="cart_items_total_item">
              <p>SubTotal</p>
              <p>$ {gotTotalCartAmount()}/-</p>
            </div>
            <hr />
            <div className="cart_items_total_item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart_items_total_item">
              <h3>Totals</h3>
              <h3>$ {gotTotalCartAmount()}/-</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>

        <div className="cartitems_promocode">
          <p>If You Have A Promocode, Enter it Here:</p>
          <div className="cartItem_promobox">
            <input type="text" placeholder="Promocode" name="" id="" />
            <button>Submit</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
