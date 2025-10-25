import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { data, useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {

  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data: '')

  const onSearchHandler = (e) => {
    e.preventDefault()
    navigate('/course-list/' + input)
  }

  return (
    <div className="w-full flex justify-center mt-6">
      <form onSubmit={onSearchHandler} className="flex items-center w-full max-w-2xl bg-white shadow-lg rounded-full overflow-hidden border border-orange-300">
        
        {/* Search Icon */}
        <img 
          src={assets.search_icon} 
          alt="search_icon" 
          className="w-6 ml-4 opacity-70"
        />

        {/* Input */}
        <input onChange= {e => setInput(e.target.value)} value = {input}
          type="text" 
          placeholder="Search for courses..." 
          className="flex-1 px-4 py-3 outline-none text-gray-700"
        />

        {/* Button */}
        <button 
          type="submit" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-medium transition"
        >
          Search
        </button>

      </form>
    </div>
  )
}

export default SearchBar
