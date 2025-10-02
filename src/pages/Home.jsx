import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import FeatureSection from '../components/FeatureSection'
import LatestProduct from '../components/LastestSection/LatestProduct'
import OfferSection from '../components/OfferSection/OfferSection'
import UniqueProduct from '../components/UniqueProduct'
import TrendingProduct from '../components/TrendingProduct'
import DiscountItem from '../components/DiscountItem'
import TopCategory from '../components/TopCategory'
import NewsletterSection from '../components/NewsletterSection'
import LatestBlog from '../components/LatestBlog'

const Home = () => {
  return (
    <>

   <HeroSection />
   <FeatureSection />
     <LatestProduct />
     <OfferSection />
     <UniqueProduct />
     <TrendingProduct />
     <DiscountItem />
     <TopCategory />
     <NewsletterSection />
     <LatestBlog />
    </>
  )
}

export default Home