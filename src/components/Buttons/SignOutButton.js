import React, {useEffect} from 'react'
import {signOut, onAuthStateChanged} from 'firebase/auth'
import { auth } from '../../firebase-config'
import { linkTo } from '../LinkTo/linkTo'
import { useNavigate } from 'react-router-dom'

const SignOutButton = ({color, size}) => {

  useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			console.log("CURRENT_USER",currentUser.email);
		})
	}, []);

    const navigate = useNavigate();

    const handleClick = async () => {
        
          const result = await signOut(auth);
          console.log(result);
          
          setTimeout(() => {
            navigate(linkTo('Index'));
            }, 10000)
          
      }
  return (
    <React.StrictMode>
    <button 
    className='button' 
    style={{backgroundColor:color}}
    >
      <p className='para' style={{fontSize:size}} onClick={handleClick}>Signet Out</p>
    </button>
    </React.StrictMode>
  )
}

export default SignOutButton