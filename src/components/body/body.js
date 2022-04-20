import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Buttons/Button'
import { linkTo } from '../LinkTo/linkTo'

const Body = () => {
  return (
    <div className='body'>
    
        <Link to={linkTo('View Gallery')}>
        <Button name = "View Gallery" 
         size = "20px"
    /></Link>
    
    </div>
  )
}

export default Body