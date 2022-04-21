import { useState } from 'react';
import './form.css';

function Form() {

// States for registration
const [title, setTitle] = useState('');

const [option, setOption] = useState('');

const [details, setDetails] = useState('');



// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the changes
const handleTitle = (e) => {
	setTitle(e.target.value);
	setSubmitted(false);
};

const handleOption = (e) => {
	setOption(e.target.value);
	setSubmitted(false);
};

const handleDetails = (e) => {
	setDetails(e.target.value);
	setSubmitted(false);
};

/**Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};
*/
// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (title === '' || details === '' || option === '') {
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
		<h1>Video Uploaded</h1>
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
	<div className="container">

	{/* Calling to the methods*/} 
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>		


		<form>
		<div className="mb-3">
			<label for="inputEmail" className="form-label">Email address</label>
			<input type="email" onChange={handleOption} className="form-control" id="inputEmail" aria-describedby="emailHelp" />
			<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
		</div>
		<div className="mb-3">
			<label for="inputPassword" className="form-label">Password</label>
			<input type="password" onChange={handleTitle} className="form-control" id="inputPassword" />
		</div>
		<div className="mb-3">
			<label for="inputPassword" className="form-label">Password</label>
			<input type="password" onChange={handleDetails} className="form-control" id="inputPassword" />
		</div>
		<div className="mb-3 form-check">
			<input type="checkbox" className="form-check-input" id="exampleCheck" />
			<label className="form-check-label" for="exampleCheck">Check me out</label>
		</div>
		<button type="submit" onClick={handleSubmit} className="btn btn-primary">Upload</button>
		</form>
	
	</div>
);
}export default Form;

