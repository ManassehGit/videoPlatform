import { useState } from 'react';
import './form.css';

function Form() {

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
	<div className="form">

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
        
		{/* Labels and inputs for form data */}
        <div className='form-input'>
            <div>
				<h2 style={{marginBottom:"30px"}}>LOGIN MENU</h2>
            </div>
            
            <input onChange={handleName} className="input"
            value={name} type="text" placeholder='USERNAME'/>

            
            <input onChange={handlePassword} className="input"
            value={password} type="password" placeholder='PASSWORD'/>

            <button onClick={handleSubmit} className="btn" type="submit"
			
			>LOGIN</button>
            
            
            <div style={{marginTop:"10px"}}>
            Not having an account? <a style={{color:"#f7941d"}} href="">SIGN UP</a>
            </div>
        </div>
	</form>
	</div>
);

}export default Form;

