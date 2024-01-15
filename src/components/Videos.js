import React from 'react'
import Search from './Search'

const Videos = () => {
  return (
    <div className='container'>
      <h1 className='text-center text-purple header-design mt-top'>Search All Videos</h1>
      <div className="search-component mt">
      <Search></Search>
      </div>
      
    </div>
  )
}

export default Videos
