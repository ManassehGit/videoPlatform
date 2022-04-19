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
    </div>
  )
}

export default TopButtons