import React from "react";
import { FaThLarge, FaList } from "react-icons/fa";

const ProductTopBar = ({ viewType, setViewType, searchTerm, setSearchTerm, resultsCount = 9620, searchSeconds = 0.62 }) => {
  return (
    <div className="sm:w-full flex flex-wrap items-center justify-between !pb-3 !mb-4 !mt-12">
      {/* Left Section */}
      <div>
        <h2 className="text-[1.1rem] font-bold text-[#1A0B5B]">
          Ecommerce Accessories & Fashion item
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          About {resultsCount.toLocaleString()} results ({searchSeconds.toFixed(2)} seconds)
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-sm text-gray-700 !mt-3 sm:!mt-0">
        {/* Per Page */}
        <div className="flex items-center gap-2">
          <label htmlFor="perPage" className="text-[#270d99]">
            Per Page:
          </label>
          <input
            id="perPage"
            type="number"
            defaultValue={0}
            className="w-16 border border-gray-300 !px-1 !py-0.5 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Sort By */}
        <div className="flex items-center gap-2">
          <label htmlFor="sortBy" className="text-[#270d99]">
            Sort By:
          </label>
          <select
            id="sortBy"
            className="border border-gray-300 !px-2 !py-1 text-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option>Best Match</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>

        {/* View Icons */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600">View:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewType('grid')}
              className={`cursor-pointer !p-1 rounded ${viewType === 'grid' ? 'text-indigo-600 ' : 'text-gray-500 hover:text-indigo-600'}`}
            >
              <FaThLarge size={16} />
            </button>
            <button
              onClick={() => setViewType('list')}
              className={`cursor-pointer !p-1 rounded ${viewType === 'list' ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600'}`}
            >
              <FaList size={16} />
            </button>
          </div>
        </div>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 !px-2 !py-1 w-36 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
};

export default ProductTopBar;
