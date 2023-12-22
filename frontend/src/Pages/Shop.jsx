import React from 'react'
import Hero from '../Components/Hero/Hero';
import Product from "../Components/Popular/Popular"
import Offers from '../Components/Offers/Offers';
import Newcollections from '../Components/NewCollections/Newcollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Offers />
      <Newcollections />
      <NewsLetter />
    </div>
  )
}

export default Shop
