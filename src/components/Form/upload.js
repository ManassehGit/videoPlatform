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
	<div className="container-body">
		<div className="">
			<div className="container col-md-6 justify-content-center p-5">
			<form>
			<div class="mb-3">
			<label for="formFile" class="form-label">Select Video File</label>
			<input class="form-control" type="file" id="formFile" />
			</div>
	<div className="mb-3">
		<label for="title" className="form-label">Video Title</label>
		<input type="password" onChange={handleTitle} className="form-control" id="title" />
	</div>
	<div className="mb-3">
		<label for="desc" className="form-label">Description</label>
		<input type="text" onChange={handleDetails} className="form-control" id="desc" />
	</div>
	
	<button type="submit" onClick={handleSubmit} className="btn btn-outline-dark btn-lg">Upload</button>
	</form>
			</div>
			
		</div>
	</div>
	
);
}export default Form;



<div className="container">

{/* Calling to the methods*/} 

	

</div>

