import React from 'react'
import Button from '../Buttons/Button'

const TopButtons = () => {
  return (
    <div className='topButtons'>
        <Button 
        name="Login"
        size="15px"
        />
        <Button name="Sign Up" 
        size="15px"/>
    </div>
  )
}

export default TopButtons