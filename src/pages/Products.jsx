import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ProductTopBar from '../components/ProductsComponents/ProductTopBar'
import ProductStructure from '../components/ProductsComponents/ProductStructure'
import { products } from '../productsData/products'
import ProductList from '../components/ProductsComponents/ProductList'

const Products = () => {
  const [viewType, setViewType] = useState('grid') // 'grid' or 'list'

  return (
    <>
      <Breadcrumb />
      <div className='sm:w-7xl !mx-auto'>

        {/* Top Bar with View Switch */}
        <ProductTopBar viewType={viewType} setViewType={setViewType} />

        {/* Product Section */}
        {viewType === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 !py-10">
            {products.map((product) => (
              <ProductStructure key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="!py-10">
            <ProductList />
          </div>
        )}
      </div>

      <div className='!mt-8 !mb-8 flex justify-center !p-4'>
        <img src="./images/companies-image.png" alt="" />
      </div>
    </>
  )
}

export default Products
