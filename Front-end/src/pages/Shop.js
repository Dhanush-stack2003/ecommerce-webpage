import React from 'react'
import Popular from '../components/Popular/popular'
import NewCollection from '../components/newCollection/newCollection'
import Offer from '../components/offers/Offer'
import Newsletter from '../components/newsletter/Newsletter'
const Shop = () => {
  return (
    <>
      {/* <Hero /> */}
      <Offer/>
      <Popular/>
      <NewCollection/>
      <Newsletter/>
    </>
  );
}

export default Shop
