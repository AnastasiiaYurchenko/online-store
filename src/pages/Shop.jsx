import Hero from 'components/Hero/Hero'
import NewCollections from 'components/NewCollections/NewCollections'
import Offers from 'components/Offers/Offers'
import Popular from 'components/Popular/Popular'
import React from 'react'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections/>
    </div>
  )
}

export default Shop