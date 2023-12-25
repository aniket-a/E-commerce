import React from 'react';
import "./item.css";
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item_prices">
        <div className="item_price_new">&#x20b9; {props.new_price}/-</div>
        <div className="item_price_old">&#x20b9; {props.old_price}/-</div>
      </div>
    </div>
  );
}

export default Item
