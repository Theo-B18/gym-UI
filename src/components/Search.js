import React from 'react'
import Card from './Card'

const Search = () => {
  return (
    <div className='container text-center'>
      <input className='p-4 w-50 mr' type="search" name="" id="" placeholder='search workout videos' />
      <button type="button" className='btn-btn-purple-squre-sm'>Search</button> 
      <Card></Card>
    </div>
  )
}

export default Search
