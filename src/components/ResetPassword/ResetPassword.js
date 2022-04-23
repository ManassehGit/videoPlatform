import React from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { linkTo } from '../LinkTo/linkTo';
import { auth } from '../../firebase-config';


const ResetPassword = () => {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [loginEmail, setLoginEmail] = useState();
    const [errorMsg, setErrorMsg] = useState("");
    
    const navigate = useNavigate();


    const forgotPassword = (e, email) => {
        e.preventDefault();
        
		try{
			sendPasswordResetEmail(auth, loginEmail)
			.then(() => {
				console.log("Check email");
                setSubmitted(true);
		        setError(false);

                setTimeout(() => {
                    navigate(linkTo('Login'));
                }, 10000)
			}).catch((err) => {
				console.log("Could not send the reset password to the mail");
                setError(true);
		        setErrorMsg(err.message);
		        console.log(err);
			})
			
		}catch(e){
			console.log(e);
            setError(true);
		    setErrorMsg(e.message);
		}
	}

    // Handling the name change
    const handleEmail = (e) => {
	setLoginEmail(e.target.value);
	setSubmitted(false);
	console.log(loginEmail);
};

    // Showing success message
const successMessage = () => {
	return (
		<div className="row d-flex justify-content-center">
		<div className='d-flex justify-content-center col-md-6'>
		<div className="alert alert-success alert-dismissible fade show" role="alert">
	<h4 className="alert-heading">{loginEmail} sent the reset link</h4>
	<p>
		Kindly reset the password via the link provided
	</p>
	<hr />
	<p className="mb-0">Sent to the mail you provided here</p>
	<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

	  </div>

	</div>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = (err) => {
	return (
		<div className="row d-flex justify-content-center">
		<div className='d-flex justify-content-center col-md-6'>
		<div className="alert alert-warning alert-dismissible fade show" role="alert">
	<h4 className="alert-heading">Sorry the link could not be sent to {loginEmail}</h4>
	<p>{err.message}</p>
	<hr />
	<p className="mb-0">Kindly retry again</p>
	<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

	  </div>

	</div>
	</div>
	);
};
  return (
    <div className="container-body">
		{error && errorMessage(errorMsg)}
		{submitted && successMessage()}
		<div className="">
			<div className="container col-md-6 justify-content-center p-5">
			<h3 style={{color: 'gray', textAlign: 'center', marginBottom: '2em'}}>Password Reset</h3>
			<form>
  <div className="mb-3">
    <label htmlFor="inputEmail" className="form-label">Email address</label>
    <input type="email" className="form-control" id="inputEmail" onChange={handleEmail} aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  
  
  <button type="submit" className="btn btn-outline-dark btn-lg" onClick={forgotPassword}>Send Reset Link</button>
</form>
			</div>
			
		</div>
	</div>
  )
}

export default ResetPassword