import React from 'react'
import {useSelector} from 'react-redux'
import Header from '../header/header'
import Body from '../body/body'
import Footer from '../footer/footer'


const Home = () => {
    const loggedIn = useSelector((state) => state.user.isLoggedIn);
    const button1 = "Log In";
    const button2 = loggedIn ? "Sign Out": "Sign Up";
  
    return (
        
        <div className='App'>  
          <Header button1={button1} button2={button2} loggedIn={loggedIn} user={{email: "Kojo@gmail.com"}}/>
          <Body />
          <Footer />
        </div>
  
    );
}

export default Home