import React from 'react'
import { linkTo } from '../LinkTo/linkTo'
import { Link } from 'react-router-dom'

const headerCentre = () => {
  return (
    <div style={{
      margin:"auto",
      paddingTop:"2em",
      paddingBottom:"2px",
      display: 'flex',
      justifyContent: 'center'
      }}>
      <Link to={linkTo('Index')}>
        <img style={{width:'auto',height:'70px'}} src='VideoPlatform.png' alt='Video Platform Logo' />
        </Link>
    </div>
  )
}

export default headerCentre