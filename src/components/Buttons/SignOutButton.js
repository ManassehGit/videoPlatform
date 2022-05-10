import React, {useEffect} from 'react'
import {signOut, onAuthStateChanged} from 'firebase/auth'
import { auth } from '../../firebase-config'
// import { linkTo } from '../LinkTo/linkTo'
// import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { logUserOut } from '../../store/userSlice';
import { linkTo } from '../LinkTo/linkTo';
import { useNavigate } from 'react-router-dom';


const SignOutButton = ({color, size}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			// console.log("CURRENT_USER",currentUser.email);
		})
	}, []);

    // const navigate = useNavigate();

    const handleClick = async () => {
          
          await signOut(auth);
          dispatch(logUserOut());

          
          setTimeout(() => {
            navigate(linkTo('Index'));
            }, 3000)
          
      }
  return (
    <React.StrictMode>
    <button 
    className='button' 
    style={{backgroundColor:color}}
    >
      <p className='para' style={{fontSize:size}} onClick={handleClick}>Sign Out</p>
    </button>
    </React.StrictMode>
  )
}

export default SignOutButton