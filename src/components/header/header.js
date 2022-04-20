import React from 'react';
import TopButtons from './TopButtons';
import { Link } from 'react-router-dom';
import { linkTo } from '../LinkTo/linkTo';

const Header = ({button1,button2}) => {

  return (
    <div className='header'>
      <img src='VideoPlatform.png' alt='Video Platform Logo'/>
     <TopButtons
      button1={button1}
      button2={button2}
      />
      
    </div>
  )
}

export default Header;