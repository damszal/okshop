function Searchbar() {
  return (
    <form action="fake-dir" className='search-bar search-bar-cont'>
      <input 
      className='search-bar__input'
      placeholder='type a product'
      >
      </input>
      <button className='search-bar__btn'
      type='submit'
      >search</button>
    </form>
  )
}

export default Searchbar