import { useEffect, useState } from 'react';
import './form.css';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../../firebase-config';
import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import { linkTo } from '../LinkTo/linkTo';



function Form() {

	const [loginEmail, setLoginEmail] = useState();
	const [loginPassword, setLoginPassword] = useState();	
	const [user, setUser] = useState();
	const [errorMsg, setErrorMsg] = useState("");
	const navigate = useNavigate();


	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		})
	}, []);

	const login = async (e) => {
		
		e.preventDefault();
		try {
		setSubmitted(true);
		setError(false);
		const user = await signInWithEmailAndPassword(
			auth,
			loginEmail,
			loginPassword
		);
		console.log(user);

		setTimeout(() => {
			navigate(linkTo('View Gallery'));
		}, 5000)

		}catch(e){
		setError(true);
		setErrorMsg(e.message);
		console.log(e);
		}

	}


	

// States for registration
//const [email, setEmail] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleEmail = (e) => {
	setLoginEmail(e.target.value);
	setSubmitted(false);
	console.log(loginEmail);
};
/**Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};**/

// Handling the password change
const handlePassword = (e) => {
	setLoginPassword(e.target.value);
	setSubmitted(false);
};


// Handling the form submission


// Showing success message
const successMessage = () => {
	return (
		<div className="row d-flex justify-content-center">
		<div className='d-flex justify-content-center col-md-6'>
		<div className="alert alert-success alert-dismissible fade show" role="alert">
	<h4 className="alert-heading">{user} logged in successfully</h4>
	<p>
		You would now be redirected to view the gallery
	</p>
	<hr />
	<p className="mb-0">Lots of videos to explore</p>
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
	<h4 className="alert-heading">{user} could not be added</h4>
	<p>{err.message}</p>
	<hr />
	<p className="mb-0">Kindly retry the login</p>
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
			<h3 style={{color: 'gray', textAlign: 'center', marginBottom: '2em'}}>Login Form</h3>
			<form>
  <div className="mb-3">
    <label htmlFor="inputEmail" className="form-label">Email address</label>
    <input type="email" className="form-control" id="inputEmail" onChange={handleEmail} aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="inputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword" onChange={handlePassword}/>
  </div>
  <div className="mb-3 d-flex justify-content-center">
  	Forgotten your password? <Link style={{color:"#f7941d", marginLeft: "5px"}} to="/resetPassword"> Reset Password</Link>
  </div>
  <div className="mb-3">
  	Not having an account? <Link style={{color:"#f7941d"}} to="/signup">Sign Up</Link>
  </div>
  
  
  <button type="submit" className="btn btn-outline-dark btn-lg" onClick={login}>Login</button>
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
	// 			<h2 style={{marginBottom:"30px"}}>LOGIN MENU</h2>
    //         </div>
            
    //         <input onChange={handleName} className="input"
    //         value={name} type="text" placeholder='USERNAME'/>

            
    //         <input onChange={handlePassword} className="input"
    //         value={password} type="password" placeholder='PASSWORD'/>

    //         <button onClick={handleSubmit} className="btn" type="submit"
			
	// 		>LOGIN</button>
            
            
    //         <div style={{marginTop:"10px"}}>
    //         Not having an account? <Link style={{color:"#f7941d"}} to="/signup">SIGN UP</Link>
    //         </div>
    //     </div>
	// </form>
	// </div>
	
	);
}
export default Form;

