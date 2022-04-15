import React from 'react'
import Button from '../Buttons/Button'

const TopButtons = ({button1,button2,color}) => {
  return (
    <div className='topButtons'>
        <Button 
        name={button1}
        size="15px"
        color={color}
        />
        <Button name={button2} 
        size="15px"
        color={color}
        />
<<<<<<< HEAD
=======
        <Button 
        name="Sign Up" 
        size="15px"
        />
>>>>>>> 851ae093736142c0becc626edcab17c47d813d04
    </div>
  )
}

export default TopButtons