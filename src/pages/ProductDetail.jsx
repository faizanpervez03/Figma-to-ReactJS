import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ProductDetailSection from '../components/ProductDetail/ProductDetailSection'
import Description from '../components/ProductDetail/Description'
import RelatedProduct from '../components/ProductDetail/RelatedProduct'


const ProductDetail = () => {
  return (
    <>
        <Breadcrumb />
        
        <ProductDetailSection />
        <Description />
        <RelatedProduct />

    
    </>
  )
}

export default ProductDetail