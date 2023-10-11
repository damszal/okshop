function Searchbar() {
  return (
    <form action="fake-dir" className='search-bar'>
      <input 
      className='search-bar__input'
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