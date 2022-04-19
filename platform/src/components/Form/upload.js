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

/* Handling the name change
const handleName = (e) => {
	setTitle(e.target.value);
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
*/

return (
	<div className="form">

	{/* Calling to the methods 
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>		
	*/}
	
	<form>
        
		{/* Labels and inputs for form data */}
        <div className='form-input2'>
            <div>
				<h2 className='head'>UPLOAD A VIDEO</h2>
            </div>

			<input className="input2"
            value={option} type="text" placeholder='UPLOAD OPTION'/>
            
            <input  className="input_"
            value={title} type="text" placeholder='TITLE'/>

			<input className="input3"
            value={details} type="text" placeholder='VIDEO DETAILS'/>


            <button className="btn_" type="submit">UPLOAD</button>
        
        </div>
	</form>
	</div>
);
}export default Form;

