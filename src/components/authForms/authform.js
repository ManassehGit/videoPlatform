import React from 'react';
import Header from '../header/headerCentre';
import Login from '../Form/Login';
import Signup from '../Form/Signin';
import Upload from '../Form/upload';
import Footer from '../footer/footer';

const AuthForm = ({loginState, signupState, uploadState}) => {
    
  return (
    <div>
        <Header />
        {loginState && <Login />}
        {signupState && <Signup />}
        {uploadState && <Upload />}
        <Footer />        
    </div>
  )
}

export default AuthForm;