import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import FeatureSection from '../components/FeatureSection'
import LatestProduct from '../components/LastestSection/LatestProduct'
import OfferSection from '../components/OfferSection/OfferSection'
import UniqueProduct from '../components/UniqueProduct'
import TrendingProduct from '../components/TrendingProduct'

const Home = () => {
  return (
    <>

   <HeroSection />
   <FeatureSection />
     <LatestProduct />
     <OfferSection />
     <UniqueProduct />
     <TrendingProduct />
    </>
  )
}

export default Home