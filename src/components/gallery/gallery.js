import React from 'react';
import VideoGrid from '../videoGrid/videoGrid';
import Header from '../header/header';
import Footer from '../footer/footer';
// import {onAuthStateChanged} from 'firebase/auth';
import { auth } from '../../firebase-config';

const user = auth.currentUser;
console.log("The current user: ", user);

const Gallery = () => {

  return (
    <div>
        <Header button1="Upload Video" button2="Sign Out" loggedIn={true} user={{email: "Kojo@gmail.com"}}/>
        <VideoGrid /> 
        <Footer />
    </div>
  )
}

export default Gallery;