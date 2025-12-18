import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { products } from '../productsData/products'

const Breadcrumb = () => {
  const location = useLocation()
  let pathnames = location.pathname.split('/').filter((x) => x)

  pathnames = pathnames.filter((segment) => segment.toLowerCase() !== 'singleblog')
  pathnames = pathnames.filter((segment) => segment.toLowerCase() !== 'productdetail')

  const productId = pathnames.find((x) => !isNaN(Number(x)))
  const product = products.find((p) => p.id === Number(productId))

  const lastName = product ? product.title : pathnames[pathnames.length - 1] || 'Home'

  return (
    <div className="h-48  bg-[#f6f5ff] !py-10 !px-6 ">
      <div className="sm:w-7xl !mx-auto !mt-6">
          <h1 className="text-3xl font-bold text-[#1b1c54] font-[josefin_Sans] capitalize">
          {lastName}
        </h1>

        <div className="mt-2 text-sm text-gray-600">
          <Link to="/" className="text-black hover:text-pink-500">
            Home
          </Link>

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1

            const displayName = !isNaN(Number(name)) && product ? product.title : name

            return (
              <span key={name}>
                <span className="!mx-1 text-black">.</span>
                {isLast ? (
                  <span className="text-pink-500 capitalize">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="hover:text-pink-500 capitalize">
                    {displayName}
                  </Link>
                )}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
