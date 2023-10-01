import React from 'react'
// import '../css/components/search-bar.scss'

function Searchbar() {
  return (
    <form action="fake-dir" className='search-bar'>
      <input 
      className='search-bar-input'
      placeholder='type a product'
      >
      </input>
      <button className='search-bar-btn'
      type='submit'
      >search</button>
    </form>
  )
}

export default Searchbar