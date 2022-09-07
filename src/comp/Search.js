import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='chat with friend' />
      </div>
      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvJ13vfrJEW1xdXvIBx2Wt-Z48ZF7EfQ7Cmz068c&s" alt="" />
        <div className="userChatInfo">
          <span>Temp</span>
        </div>
      </div>
    </div>
  )
}

export default Search