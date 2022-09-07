import React from 'react'
import Nav from '../comp/Nav'
import Search from "../comp/Search"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Nav/>
      <Search/>
    </div>
  )
}

export default Sidebar