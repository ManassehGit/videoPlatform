import React from 'react';
import Header from '../header/headerCentre';
import Login from '../Form/Login';
import Signup from '../Form/Signin';
import Upload from '../Form/upload';
import Footer from '../footer/footer';
import ResetPassword from '../ResetPassword/ResetPassword';

const AuthForm = ({loginState, signupState, uploadState, resetPassword}) => {
    
  return (
    <div>
        <Header />
        {loginState && <Login />}
        {signupState && <Signup />}
        {uploadState && <Upload />}
        {resetPassword && <ResetPassword />}
        <Footer />        
    </div>
  )
}

export default AuthForm;