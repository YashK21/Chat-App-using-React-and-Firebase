import React from 'react'
const Nav = () => {
  const click = () => {
    alert("clicked")
  }
  return (
    <div className='nav'>
      <span className='logo'>Chat App
      </span>
        <div className='user'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvJ13vfrJEW1xdXvIBx2Wt-Z48ZF7EfQ7Cmz068c&s" alt='' onClick={click} />
          <span>Yash</span>
          <button>Logout</button>
        </div>
    </div>
  )
}

export default Nav
