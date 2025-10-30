import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import BlogSection from '../components/Blog/BlogSection'
import BlogSidebar from '../components/Blog/BlogSidebar'

const Blog = () => {
  return (
    <>
      <Breadcrumb />

      <div className='sm:max-w-7xl !mx-auto'>
        <div className='flex sm:flex-nowrap flex-wrap gap-6  '>
          <BlogSection />
          <BlogSidebar />
          
        </div>
         <div className='!mt-8 !mb-8 flex justify-center !p-4 '>

                <img src="../images/companies-image.png" alt="" />
            </div>
      </div>

    </>
  )
}

export default Blog