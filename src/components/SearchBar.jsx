import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/SearchResults", { state: { query: query } })
  }
    
    const [searchbar, setSearchbar] = useState(0);
    const handletab=(e)=>{
    setSearchbar(e);
  }
  return (
    <div className="flex items-center space-x-4 text-sm font-light">
      <form onSubmit={handleSubmit}>
      <div onLoadStart={()=>handletab(0)} onDoubleClick={()=>handletab(0)} className={searchbar===1 ? "" :"hidden"}>
              <input 
                className='py-1 px-2'
                type="text"
                placeholder="Click twice to close" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              /> </div>
        <input type="submit" />
      </form>
      <MagnifyingGlassIcon onClick={()=>handletab(1)} className={searchbar===1 ? "hidden" : "h-8 w-8 text-pink-500 cursor-pointer sm:inline"}/>

    </div>
  )
}


export default SearchBar