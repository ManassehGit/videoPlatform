import React from 'react'
import Button from '../Buttons/Button'
import { useNavigate } from "react-router-dom";

const TopButtons = ({button1,button2,color}) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Form/form`; 
    navigate(path);
  }

  return (
    <div className='topButtons'>
      <Button onClick={routeChange}
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