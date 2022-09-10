import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvJ13vfrJEW1xdXvIBx2Wt-Z48ZF7EfQ7Cmz068c&s" alt='' />
      {/* to show message time */}
      <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvJ13vfrJEW1xdXvIBx2Wt-Z48ZF7EfQ7Cmz068c&s" alt='' />
      </div>
    </div>
  )
}

export default Message