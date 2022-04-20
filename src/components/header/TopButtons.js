import React from 'react'
import Button from '../Buttons/Button'
import { Link } from 'react-router-dom'
import { linkTo } from '../LinkTo/linkTo'

const TopButtons = ({button1, button2, color}) => {
  
  return (
    <div className='topButtons'>
        <Link to={linkTo(button1)}><Button 
        name={button1}
        size="15px"
        color={color}
        handleClick={linkTo(button1)}
        /></Link>
        <Link to={linkTo(button2)}>
        <Button name={button2} 
        size="15px"
        color={color}
        handleClick={linkTo(button2)}
        />
        </Link>
    </div>
  )
}

export default TopButtons