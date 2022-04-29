import React from 'react'
import Button from '../Buttons/Button'
// import { Link } from 'react-router-dom'
import { linkTo } from '../LinkTo/linkTo'
import { Link } from 'react-router-dom'
// import {signOut} from 'firebase/auth'
// import { auth } from '../../firebase-config'
import SignOutButton from '../Buttons/SignOutButton'

const TopButtons = ({button1, button2, color}) => {
  console.log("TOP button 2", button2)
  
  
  return (
    <div className='topButtons'>
      <Link to={linkTo(button1)}><Button name={button1} size="15px" color={color}/></Link>
      {button2 ? <SignOutButton /> :<Link to={linkTo(button2)}><Button name={button2} size="15px" color={color}/></Link>} 
    </div>
  )
}

export default TopButtons