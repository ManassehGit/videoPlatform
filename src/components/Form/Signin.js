import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './form.css';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase-config';
import { linkTo } from '../LinkTo/linkTo';


function Form() {

// States for registration
const [registerEmail, setRegisterEmail] = useState('');
//const [email, setEmail] = useState('');
const [registerPassword, setRegisterPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const [errorMsg, setErrorMsg] = useState("");

// Handling the registerEmail change
const handleEmail = (e) => {
	setRegisterEmail(e.target.value);
	setSubmitted(false);
	console.log(registerEmail);
};

/**Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};**/

// Handling the registerPassword change
const handlePassword = (e) => {
	setRegisterPassword(e.target.value);
	setSubmitted(false);
};

const navigate = useNavigate();

// Handling the form submission

const register = async (e) => {
	e.preventDefault();
	
    try{
      const user = await createUserWithEmailAndPassword(
		  auth,
		  registerEmail,
		  registerPassword
	  );
	  console.log(user);
	  setSubmitted(true);
	  setError(false);
	  setTimeout(() => {
		navigate(linkTo('View Gallery'))
	}, 5000)

    }catch(e){
      console.log(e.message);
	  setError(true);
	  setErrorMsg(e);
	  navigate(linkTo('index'));
    }
    
  }

// Showing success message
const successMessage = () => {
	return (
		<div className="row d-flex justify-content-center">
			<div className='d-flex justify-content-center col-md-6'>
			<div className="alert alert-success alert-dismissible fade show" role="alert">
		<h4 class="alert-heading">{registerEmail} added successfully</h4>
		<p>
			You can now view videos and upload videos and share videos on the platform
		</p>
		<hr />
		<p className="mb-0">Have a nice time on the platform</p>
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
	<h4 className="alert-heading">{registerEmail} could not be added</h4>
	<p>{err.message}</p>
	<hr />
	<p className="mb-0">Kindly retry the sign up, after you can sign in</p>
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
			<h3 style={{color: 'gray', textAlign: 'center', marginBottom: '2em'}}>Sign Up Form</h3>
			<form>
  <div className="mb-3">
    <label htmlFor="inputEmail" className="form-label">Email address</label>
    <input type="email" className="form-control" id="inputEmail" onChange={handleEmail} aria-describedby="emailHelp" autoComplete="on"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="inputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword" onChange={handlePassword} autoComplete="on"/>
  </div>
  <div className="mb-3">
  Already have an account? <Link style={{color:"#f7941d"}} to="/login">Login</Link>
  </div>
  
  
  <button type="submit" className="btn btn-outline-dark btn-lg" onClick={register}>Sign Up</button>
</form>
			</div>
			
		</div>
	</div>


	// <div className="form">

	// {/* Calling to the methods */}
	// <div className="messages">
	// 	{errorMessage()}
	// 	{successMessage()}
	// </div>

	// <form>
        
	// 	{/* Labels and inputs for form data */}
    //     <div className='form-input'>
    //         <div>
	// 			<h2 style={{marginBottom:"30px"}}>SIGN UP MENU</h2>
    //         </div>
            
    //         <input onChange={handleEmail} className="input"
    //         value={registerEmail} type="text" placeholder='USERNAME'/>

            
    //         <input onChange={handlePassword} className="input"
    //         value={registerPassword} type="password" placeholder='PASSWORD'/>

    //         <button onClick={handleSubmit} className="btn" type="submit"
			
	// 		>SIGN UP</button>
            
            
    //         <div style={{marginTop:"10px"}}>
    //         Already have an account? <Link style={{color:"#f7941d"}} to="/login">LOGIN</Link>
    //         </div>
    //     </div>
	// </form>
	// </div>
);
}export default Form;

