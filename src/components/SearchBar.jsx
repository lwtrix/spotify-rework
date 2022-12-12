import React from 'react'
import { Link } from 'react-router-dom'
import './css/search-bar.css'

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <Link to={`/`}>Home</Link> <br />
      <Link to={`/playlists`}>Playlists</Link>
      </div>
  )
}

export default SearchBar