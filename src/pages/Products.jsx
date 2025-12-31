import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import ProductTopBar from '../components/ProductsComponents/ProductTopBar'
import ProductStructure from '../components/ProductsComponents/ProductStructure'
import { products as defaultProducts } from '../productsData/products'
import ProductList from '../components/ProductsComponents/ProductList'

const API = 'http://localhost:3000/api'

const Products = () => {
  const [viewType, setViewType] = useState('grid') // 'grid' or 'list'
  const [localSearch, setLocalSearch] = useState('')
  const [products, setProducts] = useState(defaultProducts)
  const [loading, setLoading] = useState(true)
  const [searchTime, setSearchTime] = useState(0)
  const [fetchStartTime, setFetchStartTime] = useState(null)
  const location = useLocation()

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    setFetchStartTime(Date.now())
    try {
      const res = await fetch(`${API}/products`)
      const data = await res.json()
      if (data && data.length > 0) {
        // Map database products to component format
        const mappedProducts = data.map((p) => ({
          id: p._id || p.id,
          title: p.name,
          price: p.price,
          oldPrice: p.price * 1.5, // Optional: calculate old price
          image: p.image ? `${API.replace('/api', '')}${p.image}` : '/images/placeholder.png',
          description: p.description,
          category: p.category,
          countInStock: p.countInStock,
          colors: ['#EEFF61', '#F3559A', '#755BF9'],
        }))
        setProducts(mappedProducts)
      }
    } catch (err) {
      console.error('Failed to fetch products:', err)
      // Fallback to default products if API fails
      setProducts(defaultProducts)
    } finally {
      const elapsed = (Date.now() - (fetchStartTime || Date.now())) / 1000
      setSearchTime(elapsed)
      setLoading(false)
    }
  }

  const params = new URLSearchParams(location.search)
  const q = params.get('q') || ''
  const query = q.toLowerCase().trim()

  const searchQuery = (localSearch || query).toLowerCase().trim()
  const filteredProducts = searchQuery
    ? products.filter((p) => p.title.toLowerCase().includes(searchQuery))
    : products

  return (
    <>
      <Breadcrumb />
      <div className='sm:w-7xl !mx-auto'>

        {/* Top Bar with View Switch */}
        <ProductTopBar 
          viewType={viewType} 
          setViewType={setViewType} 
          searchTerm={localSearch} 
          setSearchTerm={setLocalSearch}
          resultsCount={filteredProducts.length}
          searchSeconds={searchTime}
        />

        {/* Product Section */}
        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading products...</div>
        ) : viewType === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 !py-10">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductStructure key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">No products found.</div>
            )}
          </div>
        ) : (
          <div className="!py-10">
            <ProductList products={filteredProducts} />
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
