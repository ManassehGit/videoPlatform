import React from 'react'
import Button from '../Buttons/Button'
import { Link } from 'react-router-dom'
import { linkTo } from '../LinkTo/linkTo'
import { useNavigate } from 'react-router-dom'
import {signOut} from 'firebase/auth'
import { auth } from '../../firebase-config'

const TopButtons = ({button1, button2, color}) => {
  const navigate = useNavigate();

  
    const logout = async (e) => {
      const result = await signOut(auth);
      console.log(result);
      setTimeout(() => {
        navigate(linkTo('Index'))
      }, 10000)
    }
  
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
        handleClick={button2 === "Sign Out"? logout : linkTo(button2)}
        />
        </Link>

    </div>
  )
}

export default TopButtons