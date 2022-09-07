import React from 'react'
import Nav from '../comp/Nav'
import Search from "../comp/Search"
import Chats from "../comp/Chats"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Nav/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar