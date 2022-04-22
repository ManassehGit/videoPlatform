import { useState } from 'react';
import './form.css';
import {Link} from 'react-router-dom';

function Form() {

	const [loginEmail, setLoginEmail] = useState();
	const [loginPassword, setLoginPassword] = useState();	

	const login = async () => {

	}
  
	const logout = async () => {
  
	}

// States for registration
const [name, setName] = useState('');
//const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

/**Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};**/

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="container-body">
		<div className="">
			<div className="container col-md-6 justify-content-center p-5">
			<form>
  <div class="mb-3">
    <label for="inputEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="inputPassword" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword" />
  </div>
  <div class="mb-3">
  	Not having an account? <Link style={{color:"#f7941d"}} to="/signup">Sign Up</Link>
  </div>
  
  
  <button type="submit" class="btn btn-outline-dark btn-lg">Login</button>
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

