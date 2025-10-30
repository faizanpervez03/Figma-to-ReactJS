import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router'

const Error404 = () => {
  return (
    <>
      <Breadcrumb />

      <div className='flex flex-col justify-center items-center sm:!my-2   sm:!px-4'>

        <img src="/images/404.png" alt="" className='sm:w-[40%]' />
        <Link to="/">

          <button
            type="submit"

            className="  bg-pink-500 hover:bg-pink-600 text-white !px-2 sm:!mt-2 font-semibold sm:!py-2 sm:!px-4 transition"
          >
            Back To Home
          </button>

        </Link>

      </div>



      <div className=' !mt-8 !mb-8 flex justify-center !p-2'>

        <img src="./images/companies-image.png" alt="" />
      </div>

    </>
  )
}

export default Error404