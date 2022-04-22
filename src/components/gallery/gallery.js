import React from 'react';
import VideoGrid from '../videoGrid/videoGrid';
import Header from '../header/header';
import Footer from '../footer/footer';

const Gallery = () => {
  return (
    <div>
        <Header button1="Upload Video" button2="Sign Out" loggedIn={true} user={{email: 'Kfi', name: 'Kofi'}}/>
        <VideoGrid /> 
        <Footer />
    </div>
  )
}

export default Gallery;