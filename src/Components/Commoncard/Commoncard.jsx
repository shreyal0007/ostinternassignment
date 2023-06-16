import React from 'react'
import './Commoncard.css'
const Commoncard = ({data}) => {
  return (
    <div className='maincard'>
      <div className='cardleftdiv'>
        <div className='cardcontent'>
            <p className='header'>{data.heading}</p>
            <p className='content'>{data.content}</p>
        </div>
      </div>
      <div className='cardrightdiv'>
        <img src={data.img} className='cardimage' alt="" />
      </div>
    </div>
  )
}

export default Commoncard
